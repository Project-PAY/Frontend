import excludeSpecificTypes, {ALL_TYPES} from '../excludeSpecificTypes';
import {STRING, BOOLEAN} from '../../constants/jsTypes';

describe('excludeSpecificTypes 메서드 테스트', () => {
  it('Returns an array without String type.', () => {
    const exceptString = excludeSpecificTypes([STRING]);
    const filteredArr = ALL_TYPES.filter(({type}) => type !== STRING);

    expect(exceptString.length).toBe(9);
    expect(filteredArr).toEqual(exceptString);
  });

  it('Returns an array without String and Boolean type.', () => {
    const stringAndBoolean = [STRING, BOOLEAN];
    const exceptString = excludeSpecificTypes(stringAndBoolean);
    const filteredArr = ALL_TYPES.filter(({type}) => !stringAndBoolean.includes(type as any));

    expect(exceptString.length).toBe(8);
    expect(filteredArr).toEqual(exceptString);
  });

  it('Returns an empty array [].', () => {
    const exceptAll = excludeSpecificTypes(ALL_TYPES.map(t => t.type));

    expect(exceptAll.length).toBe(0);
    expect(exceptAll).toEqual([]);
  });
});