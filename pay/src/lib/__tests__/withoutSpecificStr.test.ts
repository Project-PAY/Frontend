import withoutSpecificStr from '../withoutSpecificStr';
import excludeSpecificTypes, {IAllTypes} from '../excludeSpecificTypes';
import {STRING} from '../../constants/jsTypes';

describe('withoutSpecificStr 메서드 테스트', () => {
  it('String 타입이 아닌 값을 파라미터로 전달하였을 경우, 전달한 값 그대로 반환', () => {
    const exceptString = excludeSpecificTypes([STRING]) as IAllTypes[];
    const filtered = exceptString.every(v => withoutSpecificStr('Test Data', v as any) === 'Test Data');

    expect(filtered).toBe(true);
  });

  it(`str: 1,000,000 - without: ',' 일 경우, '1000000' 반환`, () => {
    const str = '1,000,000';
    const without = ',';

    expect(withoutSpecificStr(str, without)).toBe('1000000');
  });

  it(`str: 'Hello - without: 'll' 일 경우, 'Heo' 반환`, () => {
    const str = 'Hello';
    const without = 'll';

    expect(withoutSpecificStr(str, without)).toBe('Heo');
  });
});
