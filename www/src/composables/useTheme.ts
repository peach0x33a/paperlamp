import { computed, ref, watchEffect } from "vue";

export type ThemePreference = "light" | "dark" | "auto";

const KEY = "paperlamp-theme";
const media = typeof window !== "undefined" ? matchMedia("(prefers-color-scheme: dark)") : null;

function read(): ThemePreference {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : "auto";
  } catch {
    return "auto";
  }
}

const preference = ref<ThemePreference>(read());
const systemDark = ref(media?.matches ?? false);
media?.addEventListener("change", (e) => (systemDark.value = e.matches));

const isDark = computed(() => preference.value === "dark" || (preference.value === "auto" && systemDark.value));

watchEffect(() => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", isDark.value);
});

/**
 * The single entry point for theme state (DESIGN.md Dark Mode): three modes,
 * applied by toggling `html.dark` so every component rides the shared variables.
 */
export function useTheme() {
  function setTheme(p: ThemePreference) {
    preference.value = p;
    try {
      if (p === "auto") localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, p);
    } catch {
      /* 存储被禁用时静默降级 */
    }
  }
  return { preference, isDark, setTheme };
}
