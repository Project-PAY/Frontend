import * as React from 'react';
import {TokenType} from "../src/@types/auth";
import {useSelector} from "react-redux";
import {IRootState} from "../src/reducers";
import isEqual from 'lodash/isEqual';

const useAccessNeededFunc = <T>(callback: (access: TokenType) => T) => {
  const {session: {access}} = useSelector(
    ({system}: IRootState) => system,
    (prev, curr) => isEqual(prev, curr)
  );

  return React.useMemo(() =>
    callback(access),
    [access, callback]
  );
};

export default useAccessNeededFunc;
