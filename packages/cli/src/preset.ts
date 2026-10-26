// Preset codes shared by the CLI and the /create builder.
//
// A preset is a short string: one version letter followed by one base-36 digit per
// field, e.g. "a2000" = version a, radius #2, base #0, theme #0, font #0. New fields
// are appended, so old codes stay valid — a missing digit falls back to the default.
// Every field's first option reproduces paperlamp.css exactly, so the default preset
// produces no overrides at all.

export const RADII = [
  { name: "none", label: "直角", value: "0px" },
  { name: "small", label: "小", value: "4px" },
  { name: "default", label: "默认", value: "8px" },
  { name: "medium", label: "中", value: "10px" },
  { name: "large", label: "大", value: "14px" },
] as const;

/** Tailwind neutral scales, 50 → 950. */
type Scale = readonly [string, string, string, string, string, string, string, string, string, string, string];
const scale = (s: string) => s.split(" ") as unknown as Scale;
const [s50, s100, s200, , s400, s500, , , s800, s900, s950] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const BASES = [
  { name: "paper", label: "纸白", swatch: "#2C2C2C", scale: null },
  { name: "zinc", label: "锌灰", swatch: "#71717A", scale: scale("#FAFAFA #F4F4F5 #E4E4E7 #D4D4D8 #A1A1AA #71717A #52525B #3F3F46 #27272A #18181B #09090B") },
  { name: "stone", label: "石色", swatch: "#78716C", scale: scale("#FAFAF9 #F5F5F4 #E7E5E4 #D6D3D1 #A8A29E #78716C #57534E #44403C #292524 #1C1917 #0C0A09") },
  { name: "slate", label: "板岩", swatch: "#64748B", scale: scale("#F8FAFC #F1F5F9 #E2E8F0 #CBD5E1 #94A3B8 #64748B #475569 #334155 #1E293B #0F172A #020617") },
  { name: "neutral", label: "中性", swatch: "#737373", scale: scale("#FAFAFA #F5F5F5 #E5E5E5 #D4D4D4 #A3A3A3 #737373 #525252 #404040 #262626 #171717 #0A0A0A") },
] as const;

/** light: [primary, on-primary]; dark: [primary, on-primary]. */
export const THEMES = [
  { name: "ink", label: "墨色", swatch: "#2C2C2C", light: null, dark: null },
  { name: "indigo", label: "靛蓝", swatch: "#4F46E5", light: ["#4F46E5", "#FFFFFF"], dark: ["#818CF8", "#1E1B4B"] },
  { name: "blue", label: "蓝", swatch: "#2563EB", light: ["#2563EB", "#FFFFFF"], dark: ["#60A5FA", "#172554"] },
  { name: "teal", label: "青绿", swatch: "#0D9488", light: ["#0D9488", "#FFFFFF"], dark: ["#2DD4BF", "#042F2E"] },
  { name: "green", label: "绿", swatch: "#16A34A", light: ["#16A34A", "#FFFFFF"], dark: ["#4ADE80", "#052E16"] },
  { name: "amber", label: "琥珀", swatch: "#F59E0B", light: ["#F59E0B", "#451A03"], dark: ["#FBBF24", "#451A03"] },
  { name: "rose", label: "玫红", swatch: "#E11D48", light: ["#E11D48", "#FFFFFF"], dark: ["#FB7185", "#4C0519"] },
  { name: "violet", label: "紫", swatch: "#7C3AED", light: ["#7C3AED", "#FFFFFF"], dark: ["#A78BFA", "#2E1065"] },
] as const;

export const FONTS = [
  { name: "wenkai", label: "霞鹜文楷", value: null },
  { name: "sans", label: "黑体", value: `system-ui, -apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif` },
  { name: "song", label: "宋体", value: `"Noto Serif SC", "Source Han Serif SC", "Songti SC", STSong, "SimSun", serif` },
] as const;

export type RadiusName = (typeof RADII)[number]["name"];
export type BaseName = (typeof BASES)[number]["name"];
export type ThemeName = (typeof THEMES)[number]["name"];
export type FontName = (typeof FONTS)[number]["name"];

export interface Preset {
  radius: RadiusName;
  base: BaseName;
  theme: ThemeName;
  font: FontName;
}

export const DEFAULT_PRESET: Preset = { radius: "default", base: "paper", theme: "ink", font: "wenkai" };

const VERSION = "a";
const FIELDS = [
  { key: "radius", options: RADII.map((r) => r.name) },
  { key: "base", options: BASES.map((b) => b.name) },
  { key: "theme", options: THEMES.map((t) => t.name) },
  { key: "font", options: FONTS.map((f) => f.name) },
] as const;

export function encodePreset(p: Preset): string {
  return VERSION + FIELDS.map((f) => Math.max(0, (f.options as readonly string[]).indexOf(p[f.key])).toString(36)).join("");
}

/** Parse a preset code; returns null when the code is not a Paperlamp preset. */
export function decodePreset(code: string): Preset | null {
  const c = code.trim().replace(/^--preset[=\s]+/, "");
  if (!c.startsWith(VERSION) || !/^[a-z][0-9a-z]*$/.test(c) || c.length > FIELDS.length + 1) return null;
  const out: Record<string, string> = { ...DEFAULT_PRESET };
  for (const [i, f] of FIELDS.entries()) {
    const ch = c[i + 1];
    if (ch === undefined) continue;
    const opt = f.options[parseInt(ch, 36)];
    if (!opt) return null;
    out[f.key] = opt;
  }
  return out as unknown as Preset;
}

export const radiusValue = (name: RadiusName) => RADII.find((r) => r.name === name)!.value;

export interface ThemeVars {
  light: Record<string, string>;
  dark: Record<string, string>;
}

/** CSS variables that differ from paperlamp.css for this preset (radius included). */
export function presetVars(p: Preset): ThemeVars {
  const light: Record<string, string> = {};
  const dark: Record<string, string> = {};
  if (p.radius !== DEFAULT_PRESET.radius) light["--radius"] = radiusValue(p.radius);

  const font = FONTS.find((f) => f.name === p.font)?.value;
  if (font) light["--font-serif"] = font;

  const sc = BASES.find((b) => b.name === p.base)?.scale;
  if (sc) {
    const wash = (c: string, pct: number) => `color-mix(in oklab, ${c} ${pct}%, transparent)`;
    const darkBg = `color-mix(in oklab, ${sc[s900]}, ${sc[s950]})`;
    Object.assign(light, {
      "--background": sc[s100], "--foreground": sc[s800],
      "--card": "#FFFFFF", "--card-foreground": sc[s800],
      "--popover": "#FFFFFF", "--popover-foreground": sc[s800],
      "--primary": sc[s800], "--primary-hover": wash(sc[s800], 90), "--primary-foreground": sc[s50],
      "--secondary": wash(sc[s200], 60), "--secondary-foreground": sc[s800],
      "--muted": wash(sc[s200], 40), "--muted-foreground": sc[s500],
      "--accent": wash(sc[s200], 50), "--accent-foreground": sc[s800],
      "--border": sc[s200], "--input": sc[s200], "--ring": sc[s800],
      "--overlay": wash(sc[s100], 80),
    });
    Object.assign(dark, {
      "--background": darkBg, "--foreground": sc[s200],
      "--card": sc[s900], "--card-foreground": sc[s200],
      "--popover": sc[s900], "--popover-foreground": sc[s200],
      "--primary": sc[s200], "--primary-hover": wash(sc[s200], 90), "--primary-foreground": sc[s950],
      "--secondary": wash(sc[s800], 60), "--secondary-foreground": sc[s200],
      "--muted": wash(sc[s800], 40), "--muted-foreground": sc[s400],
      "--accent": wash(sc[s800], 50), "--accent-foreground": sc[s200],
      "--border": sc[s800], "--input": sc[s800], "--ring": sc[s200],
      "--overlay": wash(darkBg, 80),
    });
  }

  const theme = THEMES.find((t) => t.name === p.theme)!;
  if (theme.light && theme.dark) {
    for (const [vars, [c, on]] of [[light, theme.light], [dark, theme.dark]] as const) {
      Object.assign(vars, {
        "--primary": c,
        "--primary-hover": `color-mix(in oklab, ${c} 90%, transparent)`,
        "--primary-foreground": on,
        "--ring": c,
      });
    }
  }
  return { light, dark };
}

/** The overrides as a CSS snippet (empty string for the default preset). */
export function presetCss(p: Preset): string {
  const { light, dark } = presetVars(p);
  const block = (sel: string, vars: Record<string, string>) =>
    Object.keys(vars).length ? `${sel} {\n${Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}` : "";
  return [block(":root", light), block(".dark", dark)].filter(Boolean).join("\n\n");
}

/** Rewrite paperlamp.css in place: each variable is replaced inside its own block. */
export function applyPreset(css: string, p: Preset, radius?: string): string {
  const { light, dark } = presetVars(p);
  if (radius) light["--radius"] = radius;
  const patch = (block: string, vars: Record<string, string>) =>
    Object.entries(vars).reduce((b, [k, v]) => b.replace(new RegExp(`(\\n\\s*${k}:)\\s*[^;]+;`), `$1 ${v};`), block);
  return css
    .replace(/:root\s*\{[^}]*\}/, (b) => patch(b, light))
    .replace(/\.dark\s*\{[^}]*\}/, (b) => patch(b, dark));
}
