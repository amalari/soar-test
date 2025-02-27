export type DeepNullable<T> = {
  [K in keyof T]: T[K] extends Array<infer U>
    ? Array<DeepNullable<U>> | null
    : T[K] extends object
    ? DeepNullable<T[K]> | null
    : T[K] | null;
};
