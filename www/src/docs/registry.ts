/** Base URL of the registry JSON built by scripts/build-registry.ts into www/public/r. */
export const registryBase = () => `${typeof location === "undefined" ? "" : location.origin}${import.meta.env.BASE_URL}r`;

export const registryUrl = (item: string) => `${registryBase()}/${item}.json`;

/** The CLI's built-in registry (packages/cli DEFAULT_REGISTRY); no --registry needed there. */
const OFFICIAL_REGISTRY = "https://peach0x33a.github.io/paperlamp/r";

/** `paperlamp init` pointed at this site, optionally with a /create preset. */
export const initCommand = (preset?: string) => {
  const base = registryBase();
  return [
    `npx paperlamp@latest init`,
    ...(base === OFFICIAL_REGISTRY ? [] : [`--registry ${base}`]),
    ...(preset ? [`--preset ${preset}`] : []),
  ].join(" \\\n  ");
};

export const addCommand = (items: string[]) => `npx paperlamp@latest add ${items.join(" ")}`;
