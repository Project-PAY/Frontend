import {
  TAllTypes,
  TAllTypesToString
} from '../@types/jsTypes';
import {
  ARRAY,
  BOOLEAN,
  FUNCTION,
  NULL,
  NUMBER,
  OBJECT,
  STRING,
  SYMBOL,
  UNDEFINED
} from '../constants/jsTypes';

interface IAllTypes {
  type: TAllTypesToString;
  value: TAllTypes;
}

const ALL_TYPES: IAllTypes[] = [
  {
    type: ARRAY,
    value: [1, 2, 3, 4, 5]
  },
  {
    type: STRING,
    value: 'Pewww'
  },
  {
    type: NUMBER,
    value: 10
  },
  {
    type: NUMBER,
    value: NaN
  },
  {
    type: BOOLEAN,
    value: false
  },
  {
    type: OBJECT,
    value: {a: 1, b: 2}
  },
  {
    type: NULL,
    value: null
  },
  {
    type: UNDEFINED,
    value: undefined
  },
  {
    type: FUNCTION,
    value: () => {}
  },
  {
    type: SYMBOL,
    value: Symbol('Pewww')
  }
];

const notSpecificTypes = (excludeType: TAllTypesToString[]) =>
  ALL_TYPES.filter(({type}) => !excludeType.includes(type));

export default notSpecificTypes;
