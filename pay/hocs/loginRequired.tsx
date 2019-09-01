// 토큰 없을 시 401 페이지로 이동
import * as React from 'react';
import Page401 from '../pages/Page401';

const loginRequired = <T extends {}>(Target: React.ComponentType) => {
  const LoginRequired = (props: T) => {
    // return Page401 OR Target
    const access = 'Test';

    return !access ? (
      <Page401/>
    ) : (
      <Target {...props}/>
    );
  };

  return LoginRequired;
};

export default loginRequired;
