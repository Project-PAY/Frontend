// 토큰 있을 시 아전 페이지로 이동
import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

const anonRequired = <T extends {}>(Target: React.ComponentType) => {
  const AnonRequired = ({history, ...props}: T & RouteComponentProps) => {
    // router back OR return Target - Type Error should be solved.
    const access = 'Test';

    if (access) {
      alert('이미 로그인 하였습니다.');
      history.goBack();
    }

    return <Target {...props}/>;
  };

  return withRouter(AnonRequired);
};

export default anonRequired;
