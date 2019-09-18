import * as React from 'react';
import {useSelector} from 'react-redux';
import {IRootState} from '../src/reducers';
import Page401 from '../pages/common/Page401';
import isEqual from 'lodash/isEqual';

const loginRequired = <T extends {}>(Target: React.ComponentType) => {
  const LoginRequired = (props: T) => {
    const {session: {access}} = useSelector(
      ({system}: IRootState) => system,
      (prev, curr) => isEqual(prev, curr)
    );

    return !access ? (
      <Page401/>
    ) : (
      <Target {...props}/>
    );
  };

  return LoginRequired;
};

export default loginRequired;
