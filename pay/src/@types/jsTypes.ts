export type TString = 'string';
export type TArray = 'array';
export type TNumber = 'number';
export type TBoolean = 'boolean';
export type TObject = 'object';
export type TNull = 'null';
export type TUndefined = 'undefined';
export type TFunction = 'function';
export type TSymbol = 'symbol';

export type TAllTypes = string
  | any[]
  | number
  | boolean
  | object
  | null
  | undefined
  | Function
  | symbol;;

export type TAllTypesToString = TString
  | TArray
  | TNumber
  | TBoolean
  | TObject
  | TNull
  | TUndefined
  | TFunction
  | TSymbol;
