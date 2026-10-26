/** Base URL of the registry JSON built by scripts/build-registry.ts into www/public/r. */
export const registryBase = () => `${typeof location === "undefined" ? "" : location.origin}/r`;

export const registryUrl = (item: string) => `${registryBase()}/${item}.json`;
