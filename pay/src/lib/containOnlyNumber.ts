import {ONLY_NUMBER_REGEX} from "../constants/regex";

const containOnlyNumber = (data: string) => {
  return (ONLY_NUMBER_REGEX.test(data) || !data.trim().length);
};

export default containOnlyNumber;
