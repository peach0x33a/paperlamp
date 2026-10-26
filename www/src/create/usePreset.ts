import type { Preset } from "../../../packages/cli/src/preset";
import { computed, ref } from "vue";
import { decodePreset, DEFAULT_PRESET, encodePreset, RADII, radiusValue } from "../../../packages/cli/src/preset";

export { decodePreset, DEFAULT_PRESET, encodePreset, RADII, radiusValue };
export type { Preset };

// Module-level state: the customizer, the preview frame and the dialogs share one preset.
const preset = ref<Preset>({ ...DEFAULT_PRESET });
const past = ref<Preset[]>([]);
const future = ref<Preset[]>([]);
/** Hover preview from an open picker; never written to the URL or history. */
const override = ref<Partial<Preset> | null>(null);

const same = (a: Preset, b: Preset) => encodePreset(a) === encodePreset(b);

export function usePreset() {
  const effective = computed<Preset>(() => ({ ...preset.value, ...override.value }));
  const code = computed(() => encodePreset(preset.value));

  function set(next: Partial<Preset>) {
    const merged = { ...preset.value, ...next };
    if (same(merged, preset.value)) return;
    past.value = [...past.value, preset.value].slice(-50);
    future.value = [];
    preset.value = merged;
  }

  function undo() {
    const prev = past.value.at(-1);
    if (!prev) return;
    past.value = past.value.slice(0, -1);
    future.value = [preset.value, ...future.value];
    preset.value = prev;
  }

  function redo() {
    const next = future.value[0];
    if (!next) return;
    future.value = future.value.slice(1);
    past.value = [...past.value, preset.value];
    preset.value = next;
  }

  function randomize() {
    const choices = RADII.filter((r) => r.name !== preset.value.radius);
    set({ radius: choices[Math.floor(Math.random() * choices.length)]!.name });
  }

  /** Replace the preset without recording history (initial load from the URL). */
  function load(p: Preset) {
    preset.value = p;
  }

  return {
    preset,
    effective,
    code,
    canUndo: computed(() => past.value.length > 0),
    canRedo: computed(() => future.value.length > 0),
    isDefault: computed(() => same(preset.value, DEFAULT_PRESET)),
    set,
    undo,
    redo,
    randomize,
    load,
    reset: () => set(DEFAULT_PRESET),
    setOverride: (p: Partial<Preset>) => (override.value = p),
    clearOverride: () => (override.value = null),
  };
}

/** Pull a preset out of anything pasted: a bare code, `--preset a4`, a full command or a /create URL. */
export function extractPreset(input: string): Preset | null {
  const s = input.trim();
  const fromQuery = s.match(/[?&]preset=([0-9a-z]+)/i)?.[1];
  const fromFlag = s.match(/--preset[=\s]+([0-9a-z]+)/i)?.[1];
  return decodePreset((fromQuery ?? fromFlag ?? s).toLowerCase());
}

export type PreviewPage = "gallery" | "components" | "payload";
export type PreviewMode = "light" | "dark";

export interface PreviewMessage {
  type: "paperlamp:preview";
  radius: string;
  mode: PreviewMode;
  page: PreviewPage;
}
export interface KeyMessage {
  type: "paperlamp:key";
  key: string;
  mod: boolean;
  shift: boolean;
}
