export type Lazy<T extends Record<string, any>> = Promise<T> | T;
