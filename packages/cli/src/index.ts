#!/usr/bin/env node
// paperlamp — copy Paperlamp components into a Vue + Tailwind v4 project.
//
//   paperlamp init --registry <url> [--preset <code> | --radius <name|length>] [--css <file>]
//   paperlamp add <name...> [--all] [--overwrite]
//   paperlamp list
//
// Zero runtime dependencies: Node ≥ 18 built-ins only (fetch, fs, child_process).

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import process from "node:process";
import pkg from "../package.json" with { type: "json" };
import { decodePreset, DEFAULT_PRESET, encodePreset, RADII, radiusValue } from "./preset";

interface FileEntry {
  path: string;
  target: "ui" | "lib" | "css";
  content: string;
}
interface Item {
  name: string;
  type: "style" | "lib" | "ui";
  title: string;
  description?: string;
  category?: string;
  dependencies: string[];
  registryDependencies: string[];
  cssImports?: string[];
  files: FileEntry[];
}
interface Config {
  registry: string;
  css: string;
  radius: string;
  preset?: string;
  paths: { ui: string; lib: string };
  aliases: { ui: string; lib: string };
}

const CONFIG_FILE = "paperlamp.json";
const CATEGORY_LABELS: Record<string, string> = {
  general: "通用",
  form: "表单",
  layout: "布局",
  overlay: "浮层",
  feedback: "反馈",
  navigation: "导航",
  data: "数据展示",
  signature: "纸灯特色",
};

// ---------- tiny output helpers

const tty = process.stdout.isTTY && !process.env.NO_COLOR;
const paint = (code: number) => (s: string) => (tty ? `\x1b[${code}m${s}\x1b[0m` : s);
const dim = paint(2);
const bold = paint(1);
const green = paint(32);
const yellow = paint(33);
const red = paint(31);

class CliError extends Error {}
const fail = (msg: string): never => {
  throw new CliError(msg);
};

// ---------- argv

interface Args {
  _: string[];
  flags: Record<string, string | boolean>;
}
function parseArgs(argv: string[]): Args {
  const out: Args = { _: [], flags: {} };
  const bool = new Set(["all", "overwrite", "yes", "no-install", "help", "version", "h", "v"]);
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]!;
    if (a.startsWith("--")) {
      const [k, v] = a.slice(2).split("=", 2) as [string, string | undefined];
      if (v !== undefined) out.flags[k] = v;
      else if (bool.has(k) || argv[i + 1] === undefined || argv[i + 1]!.startsWith("-")) out.flags[k] = true;
      else out.flags[k] = argv[++i]!;
    } else if (a.startsWith("-") && a.length === 2) {
      out.flags[a.slice(1)] = true;
    } else {
      out._.push(a);
    }
  }
  return out;
}
const str = (v: string | boolean | undefined) => (typeof v === "string" ? v : undefined);

// ---------- project helpers

function readJson<T>(file: string): T | null {
  if (!existsSync(file)) return null;
  try {
    return JSON.parse(readFileSync(file, "utf8")) as T;
  } catch {
    return fail(`${file} 不是合法的 JSON`);
  }
}

function write(file: string, content: string) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

function packageManager(cwd: string): { name: string; add: string[] } {
  if (existsSync(join(cwd, "bun.lock")) || existsSync(join(cwd, "bun.lockb"))) return { name: "bun", add: ["add"] };
  if (existsSync(join(cwd, "pnpm-lock.yaml"))) return { name: "pnpm", add: ["add"] };
  if (existsSync(join(cwd, "yarn.lock"))) return { name: "yarn", add: ["add"] };
  return { name: "npm", add: ["install"] };
}

function install(cwd: string, specs: string[], skip: boolean) {
  const pj = readJson<{ dependencies?: Record<string, string>; devDependencies?: Record<string, string> }>(
    join(cwd, "package.json"),
  );
  const have = new Set(Object.keys({ ...pj?.dependencies, ...pj?.devDependencies }));
  const nameOf = (s: string) => s.replace(/(?<=.)@[^@]*$/, "");
  const missing = [...new Set(specs)].filter((s) => !have.has(nameOf(s))).sort();
  if (!missing.length) return;
  const pm = packageManager(cwd);
  if (skip) {
    console.log(`${yellow("!")} 跳过依赖安装，请手动运行：${pm.name} ${pm.add.join(" ")} ${missing.join(" ")}`);
    return;
  }
  console.log(`${dim("›")} ${pm.name} ${pm.add.join(" ")} ${missing.join(" ")}`);
  const r = spawnSync(pm.name, [...pm.add, ...missing], { cwd, stdio: "inherit", shell: process.platform === "win32" });
  if (r.status !== 0) fail(`依赖安装失败（${pm.name} 退出码 ${r.status ?? "?"}），可以手动重试上面的命令`);
}

// ---------- registry

async function fetchItem(base: string, name: string): Promise<Item> {
  const url = `${base}/${name}.json`;
  let res: Response;
  try {
    res = await fetch(url);
  } catch (e) {
    return fail(`连不上 registry：${url}\n  ${(e as Error).message}`);
  }
  // Static hosts and SPA dev servers often answer unknown paths with index.html and a 200.
  if (res.status === 404 || (res.ok && !isJson(res))) return fail(`registry 里没有「${name}」。运行 paperlamp list 查看可用组件`);
  if (!res.ok) return fail(`读取 ${url} 失败：HTTP ${res.status}`);
  return (await res.json()) as Item;
}

const isJson = (res: Response) => (res.headers.get("content-type") ?? "").includes("json");

/** Fetch items and everything they depend on, dependencies first. */
async function resolveTree(base: string, names: string[]): Promise<Item[]> {
  const seen = new Map<string, Item>();
  const order: Item[] = [];
  async function visit(name: string, path: string[]) {
    if (path.includes(name)) return;
    if (seen.has(name)) return;
    const item = await fetchItem(base, name);
    seen.set(name, item);
    for (const d of item.registryDependencies) await visit(d, [...path, name]);
    order.push(item);
  }
  for (const n of names) await visit(n, []);
  return order;
}

const normalizeRegistry = (url: string) => {
  if (!/^https?:\/\//.test(url)) fail(`registry 地址需要以 http:// 或 https:// 开头：${url}`);
  return url.replace(/\/+$/, "").replace(/\/index\.json$/, "");
};

// ---------- config

function loadConfig(cwd: string): Config {
  const c = readJson<Config>(join(cwd, CONFIG_FILE));
  if (!c) fail(`当前目录没有 ${CONFIG_FILE}。先运行 paperlamp init --registry <地址>`);
  return c!;
}

function defaultPaths(cwd: string) {
  const nuxt = ["nuxt.config.ts", "nuxt.config.js", "nuxt.config.mjs"].some((f) => existsSync(join(cwd, f)));
  const base = nuxt && !existsSync(join(cwd, "src")) ? "" : "src/";
  return { ui: `${base}components/ui`, lib: `${base}lib` };
}

const CSS_CANDIDATES = [
  "src/style.css",
  "src/styles.css",
  "src/index.css",
  "src/main.css",
  "src/assets/main.css",
  "src/assets/css/main.css",
  "app/assets/css/main.css",
  "assets/css/main.css",
];

function hasAtAlias(cwd: string) {
  for (const f of ["tsconfig.json", "tsconfig.app.json", "jsconfig.json"]) {
    const p = join(cwd, f);
    if (existsSync(p) && readFileSync(p, "utf8").includes('"@/*"')) return true;
  }
  return existsSync(join(cwd, "nuxt.config.ts")) || existsSync(join(cwd, "nuxt.config.js"));
}

// ---------- commands

function radiusFrom(flags: Args["flags"]): { radius: string; preset?: string } {
  const presetFlag = str(flags.preset);
  if (presetFlag) {
    const p = decodePreset(presetFlag);
    if (!p) fail(`无法识别的 preset：${presetFlag}`);
    return { radius: radiusValue(p!.radius), preset: encodePreset(p!) };
  }
  const r = str(flags.radius);
  if (!r) return { radius: radiusValue(DEFAULT_PRESET.radius), preset: encodePreset(DEFAULT_PRESET) };
  const named = RADII.find((x) => x.name === r);
  if (named) return { radius: named.value, preset: encodePreset({ radius: named.name }) };
  if (/^\d+(\.\d+)?(px|rem|em)$|^0$/.test(r)) return { radius: r };
  return fail(`--radius 只接受 ${RADII.map((x) => x.name).join(" / ")}，或一个长度值（如 6px、0.5rem）`);
}

function applyRadius(css: string, radius: string) {
  return css.replace(/--radius:\s*[^;]+;/, `--radius: ${radius};`);
}

/** Put the theme imports at the top of the user's main CSS file, in the required order. */
function ensureImports(file: string, imports: string[]) {
  const wanted = imports.map((i) => `@import "${i}";`);
  const body = existsSync(file) ? readFileSync(file, "utf8") : "";
  const rest = body
    .split(/\r?\n/)
    .filter((line) => !wanted.includes(line.trim().replace(/'/g, '"')))
    .join("\n")
    .replace(/^\s+/, "");
  write(file, `${wanted.join("\n")}\n${rest ? `\n${rest}` : ""}`);
}

async function init(cwd: string, flags: Args["flags"]) {
  if (!existsSync(join(cwd, "package.json"))) fail("当前目录没有 package.json，请在项目根目录运行");

  const existing = readJson<Config>(join(cwd, CONFIG_FILE));
  const registryFlag = str(flags.registry) ?? process.env.PAPERLAMP_REGISTRY ?? existing?.registry;
  if (!registryFlag) fail("需要 registry 地址：paperlamp init --registry https://<文档站>/r");
  const registry = normalizeRegistry(registryFlag!);

  const cssFile = str(flags.css) ?? existing?.css ?? CSS_CANDIDATES.find((f) => existsSync(join(cwd, f))) ?? "src/style.css";
  const createdCss = !existsSync(join(cwd, cssFile));
  const { radius, preset } = radiusFrom(flags);

  const config: Config = {
    registry,
    css: cssFile,
    radius,
    ...(preset ? { preset } : {}),
    paths: existing?.paths ?? defaultPaths(cwd),
    aliases: existing?.aliases ?? { ui: "@/components/ui", lib: "@/lib" },
  };

  const [style, ...rest] = await resolveTree(registry, ["paperlamp"]).then((items) => {
    const s = items.find((i) => i.type === "style");
    if (!s) fail("registry 里缺少主题条目 paperlamp");
    return [s!, ...items.filter((i) => i !== s)];
  });

  const themeFile = join(dirname(join(cwd, cssFile)), "paperlamp.css");
  write(themeFile, applyRadius(style!.files[0]!.content, radius));
  let themeImport = relative(dirname(join(cwd, cssFile)), themeFile).replace(/\\/g, "/");
  if (!themeImport.startsWith(".")) themeImport = `./${themeImport}`;
  ensureImports(join(cwd, cssFile), [...(style!.cssImports ?? []), themeImport]);

  const written = writeItems(cwd, config, rest, Boolean(flags.overwrite));
  write(join(cwd, CONFIG_FILE), `${JSON.stringify(config, null, 2)}\n`);

  console.log(`${green("✓")} ${"主题".padEnd(14)}${relative(cwd, themeFile)}  ${dim(`--radius: ${radius}`)}`);
  console.log(`${green("✓")} ${"样式".padEnd(14)}${cssFile}${createdCss ? dim("（新建）") : ""}`);
  for (const w of written) console.log(w);
  console.log(`${green("✓")} ${"配置".padEnd(14)}${CONFIG_FILE}`);

  install(cwd, [...style!.dependencies, ...rest.flatMap((i) => i.dependencies)], Boolean(flags["no-install"]));

  if (createdCss) console.log(`${yellow("!")} 新建了 ${cssFile}，记得在入口文件里 import 它`);
  if (!hasAtAlias(cwd)) console.log(`${yellow("!")} 没找到 "@/*" 路径别名。组件用 @/components/ui 与 @/lib 互相引用，请在 tsconfig 与 vite.config 里把 @ 指向 src`);
  console.log(`\n现在可以添加组件：${bold("npx paperlamp add button")}`);
}

function rewriteImports(content: string, aliases: Config["aliases"]) {
  return content
    .replace(/(["'])@\/components\/ui\//g, `$1${aliases.ui}/`)
    .replace(/(["'])@\/lib\//g, `$1${aliases.lib}/`);
}

/** Write ui/lib files; returns one summary line per item written. */
function writeItems(cwd: string, config: Config, items: Item[], overwrite: boolean): string[] {
  const lines: string[] = [];
  for (const item of items) {
    if (item.type === "style") continue;
    let wrote = 0;
    let kept = 0;
    for (const f of item.files) {
      const root = f.target === "lib" ? config.paths.lib : config.paths.ui;
      const dest = join(cwd, root, f.path);
      if (existsSync(dest) && !overwrite) {
        kept++;
        continue;
      }
      write(dest, rewriteImports(f.content, config.aliases));
      wrote++;
    }
    const where = item.type === "lib" ? config.paths.lib : `${config.paths.ui}/${item.name}`;
    if (wrote) lines.push(`${green("✓")} ${item.name.padEnd(14)}${where}`);
    else if (kept) lines.push(`${dim("·")} ${item.name.padEnd(14)}${dim("已存在，跳过（--overwrite 覆盖）")}`);
  }
  return lines;
}

async function add(cwd: string, names: string[], flags: Args["flags"]) {
  const config = loadConfig(cwd);
  const registry = normalizeRegistry(str(flags.registry) ?? config.registry);
  if (flags.all) {
    const index = await fetchIndex(registry);
    names = index.items.filter((i) => i.type === "ui").map((i) => i.name);
  }
  if (!names.length) fail("要添加哪个组件？例如 paperlamp add button tool-card");

  const items = await resolveTree(registry, names);
  const written = writeItems(cwd, config, items, Boolean(flags.overwrite));
  for (const w of written) console.log(w);
  install(cwd, items.flatMap((i) => i.dependencies), Boolean(flags["no-install"]));
}

async function fetchIndex(registry: string) {
  const res = await fetch(`${registry}/index.json`).catch((e: Error) => fail(`连不上 registry：${registry}\n  ${e.message}`));
  if (!res.ok || !isJson(res)) fail(`${registry} 不是纸灯 registry（${registry}/index.json 不存在）`);
  return (await res.json()) as { items: Omit<Item, "files">[] };
}

async function list(cwd: string, flags: Args["flags"]) {
  const registry = normalizeRegistry(
    str(flags.registry) ?? readJson<Config>(join(cwd, CONFIG_FILE))?.registry ?? process.env.PAPERLAMP_REGISTRY ?? fail("需要 --registry <地址>"),
  );
  const { items } = await fetchIndex(registry);
  const groups = new Map<string, typeof items>();
  for (const i of items.filter((x) => x.type === "ui")) {
    const k = i.category ?? "other";
    groups.set(k, [...(groups.get(k) ?? []), i]);
  }
  for (const [cat, group] of groups) {
    console.log(bold(CATEGORY_LABELS[cat] ?? "其他"));
    for (const i of group) console.log(`  ${i.name.padEnd(16)}${dim(i.title)}`);
  }
}

const HELP = `${bold("paperlamp")} ${dim(pkg.version)} — 把纸灯组件源码复制进你的 Vue 项目

用法
  paperlamp init --registry <url>   写入主题、cn() 工具与 paperlamp.json
      --preset <code>               使用 /create 构建器生成的 preset
      --radius <name|长度>          ${RADII.map((r) => r.name).join(" / ")}，或 6px、0.5rem
      --css <file>                  主样式文件（默认自动查找，找不到则新建 src/style.css）
  paperlamp add <组件...>           复制组件及其依赖的组件，并安装 npm 依赖
      --all                         添加全部组件
      --overwrite                   覆盖已存在的文件
  paperlamp list                    列出 registry 里的组件

通用选项
  --cwd <dir>        在指定目录运行
  --no-install       只写文件，不安装依赖
  -v, --version      显示版本
`;

async function main() {
  const { _: [cmd, ...rest], flags } = parseArgs(process.argv.slice(2));
  const cwd = resolve(str(flags.cwd) ?? process.cwd());
  if (flags.version || flags.v) return console.log(pkg.version);
  if (!cmd || flags.help || flags.h || cmd === "help") return console.log(HELP);
  if (cmd === "init") return init(cwd, flags);
  if (cmd === "add") return add(cwd, rest, flags);
  if (cmd === "list" || cmd === "ls") return list(cwd, flags);
  fail(`未知命令：${cmd}。运行 paperlamp --help 查看用法`);
}

main().catch((e) => {
  if (e instanceof CliError) {
    console.error(`${red("✗")} ${e.message}`);
    process.exit(1);
  }
  throw e;
});
