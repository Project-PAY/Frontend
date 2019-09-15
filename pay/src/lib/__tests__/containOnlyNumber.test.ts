import containOnlyNumber from '../containOnlyNumber';

describe('containOnlyNumber 메서드 테스트', () => {
  it(`Returns false if data is 'hello'`, () => {
    const str = 'hello';
    expect(containOnlyNumber(str)).toBe(false);
  });

  it(`Returns false if data is '102.5'`, () => {
    const str = '102.5';
    expect(containOnlyNumber(str)).toBe(false);
  });
  
  it(`Returns false if data is '10000-30000'`, () => {
    const str = '10000-30000';
    expect(containOnlyNumber(str)).toBe(false);
  });
  
  it(`Returns true if data is '2031392345'`, () => {
    const str = '2031392345';
    expect(containOnlyNumber(str)).toBe(true);
  });

  it(`Returns true if data is '30280000'`, () => {
    const str = '30280000';
    expect(containOnlyNumber(str)).toBe(true);
  });

  it(`Returns true if data is ''`, () => {
    const str = '';
    expect(containOnlyNumber(str)).toBe(true);
  });
});