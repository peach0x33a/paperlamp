/** Base URL of the registry JSON built by scripts/build-registry.ts into www/public/r. */
export const registryBase = () => `${typeof location === "undefined" ? "" : location.origin}/r`;

export const registryUrl = (item: string) => `${registryBase()}/${item}.json`;

/** `paperlamp init` pointed at this site, optionally with a /create preset. */
export const initCommand = (preset?: string) =>
  [`npx paperlamp@latest init`, `--registry ${registryBase()}`, ...(preset ? [`--preset ${preset}`] : [])].join(" \\\n  ");

export const addCommand = (items: string[]) => `npx paperlamp@latest add ${items.join(" ")}`;
