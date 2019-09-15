/**
 * @param data - Data which type is String.
 * Returns the string converted to numeric notation.
 */

const withCommaNotation = (data: string) => {
  if (typeof data !== 'string') {
    return data;
  }

  const UNIT_LENGTH = 3;

  let newStr = data;
  let commaIdx = newStr.length - UNIT_LENGTH;

  while (commaIdx > 0) {
    newStr = `${newStr.substring(0, commaIdx)},${newStr.substring(commaIdx, newStr.length)}`;
    commaIdx -= UNIT_LENGTH;
  }

  return newStr;
};

export default withCommaNotation;
