export type Diff<T, U> = T extends U ? never : T;

export type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

export type Dig<T, U extends keyof T> = Pick<T, U>[U];
