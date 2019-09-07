declare module '*.png' {
  const resource: string;
  export = resource;
}

declare module '*.svg' {
  const resource: string;
  export = resource;
}

declare module '*.css' {
  const resource: any;
  export = resource;
}

declare module '*.scss' {
  const resource: string;
  export = resource;
}

declare module '*.json' {
  const resource: any;
  export = resource;
}

export interface IStringIndexable {
  [key: string]: any;
}

export interface INumberIndexable {
  [key: number]: any;
}

export type Indexable = StringIndexable & NumberIndexable;