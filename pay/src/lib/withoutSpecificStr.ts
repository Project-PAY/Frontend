/**
 * @param str - Target data
 * @param without - A string that you want to exclude in 'str'.
 */

const withoutSpecificStr = (str: string, without: string) => {
  if (typeof str !== 'string' || typeof without !== 'string') {
    return str;
  }

  return str.split(without).reduce((prev, curr) => prev + curr);
};

export default withoutSpecificStr;
