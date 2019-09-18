import {ONLY_NUMBER_REGEX} from "../constants/regex";

/**
 * @param data - Data which type is String.
 * Returns true if data contains only number. (else false)
 */

const containOnlyNumber = (data: string) => {
  if (typeof data !== 'string') {
    return '';
  }

  return (ONLY_NUMBER_REGEX.test(data) || !data.trim().length);
};

export default containOnlyNumber;
