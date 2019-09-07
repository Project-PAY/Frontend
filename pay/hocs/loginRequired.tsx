// 토큰 없을 시 401 페이지로 이동
import * as React from 'react';
import {useSelector} from 'react-redux';
import {IRootState} from '../src/reducers';
import Page401 from '../pages/Page401';

const loginRequired = <T extends {}>(Target: React.ComponentType) => {
  const LoginRequired = (props: T) => {
    const {session: {access}} = useSelector(({system}: IRootState) => system);

    return !access ? (
      <Page401/>
    ) : (
      <Target {...props}/>
    );
  };

  return LoginRequired;
};

export default loginRequired;
