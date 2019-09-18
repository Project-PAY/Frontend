export interface IStringIndexable {
  [key: string]: any;
}

export interface INumberIndexable {
  [key: number]: any;
}

export type Indexable = StringIndexable & NumberIndexable;
