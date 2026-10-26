import type { HighlighterCore } from "shiki/core";
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

let highlighter: Promise<HighlighterCore> | null = null;

function get() {
  highlighter ??= createHighlighterCore({
    themes: [import("shiki/themes/min-light.mjs"), import("shiki/themes/min-dark.mjs")],
    langs: [
      import("shiki/langs/vue.mjs"),
      import("shiki/langs/typescript.mjs"),
      import("shiki/langs/bash.mjs"),
      import("shiki/langs/css.mjs"),
      import("shiki/langs/json.mjs"),
    ],
    engine: createJavaScriptRegexEngine(),
  });
  return highlighter;
}

export type Lang = "vue" | "ts" | "bash" | "css" | "json";

export async function highlight(code: string, lang: Lang) {
  const h = await get();
  return h.codeToHtml(code, {
    lang: lang === "ts" ? "typescript" : lang,
    themes: { light: "min-light", dark: "min-dark" },
    defaultColor: false,
  });
}
