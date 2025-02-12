export const storeType =
  (store: string) =>
  (action: string): string =>
    `[${store.toLocaleUpperCase()}] ${action}`;
