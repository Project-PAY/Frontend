import withCommaNotation from '../withCommaNotation';
import excludeSpecificTypes, {IAllTypes} from '../excludeSpecificTypes';
import {STRING} from '../../constants/jsTypes';

describe('withCommaNotation 메서드 테스트', () => {
  it('String 타입이 아닌 값을 파라미터로 전달하였을 경우, 전달한 값 그대로 반환', () => {
    const exceptString = excludeSpecificTypes([STRING]) as IAllTypes[];
    const mappedArr = exceptString.map(v => withCommaNotation(v as any));

    expect(mappedArr).toEqual(exceptString);
  });

  it(`'100'이 주어졌을 경우 '100' 반환`, () => {
    expect(withCommaNotation('100')).toBe('100');
  });

  it(`'1000'이 주어졌을 경우 '1,000' 반환`, () => {
    expect(withCommaNotation('1000')).toBe('1,000');
  });

  it(`'10000'이 주어졌을 경우 '10,000' 반환`, () => {
    expect(withCommaNotation('10000')).toBe('10,000');
  });

  it(`'1000000000'이 주어졌을 경우 '1,000,000,000' 반환`, () => {
    expect(withCommaNotation('1000000000')).toBe('1,000,000,000');
  });
});
