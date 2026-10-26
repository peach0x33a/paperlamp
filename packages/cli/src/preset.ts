// Preset codes shared by the CLI and the /create builder.
//
// A preset is a short string: one version letter followed by one base-36 digit per
// field, e.g. "a2" = version a, radius #2 (default). New fields are appended, so old
// codes stay valid — a missing digit falls back to the field's default.

export const RADII = [
  { name: "none", label: "直角", value: "0px" },
  { name: "small", label: "小", value: "4px" },
  { name: "default", label: "默认", value: "8px" },
  { name: "medium", label: "中", value: "10px" },
  { name: "large", label: "大", value: "14px" },
] as const;

export type RadiusName = (typeof RADII)[number]["name"];

export interface Preset {
  radius: RadiusName;
}

export const DEFAULT_PRESET: Preset = { radius: "default" };

const VERSION = "a";
const FIELDS = [{ key: "radius", options: RADII.map((r) => r.name) }] as const;

export function encodePreset(p: Preset): string {
  return VERSION + FIELDS.map((f) => Math.max(0, f.options.indexOf(p[f.key])).toString(36)).join("");
}

/** Parse a preset code; returns null when the code is not a Paperlamp preset. */
export function decodePreset(code: string): Preset | null {
  const c = code.trim().replace(/^--preset[=\s]+/, "");
  if (!c.startsWith(VERSION) || !/^[a-z][0-9a-z]*$/.test(c)) return null;
  const out: Preset = { ...DEFAULT_PRESET };
  for (const [i, f] of FIELDS.entries()) {
    const ch = c[i + 1];
    if (ch === undefined) continue;
    const opt = f.options[parseInt(ch, 36)];
    if (!opt) return null;
    out[f.key] = opt;
  }
  return out;
}

export const radiusValue = (name: RadiusName) => RADII.find((r) => r.name === name)!.value;
