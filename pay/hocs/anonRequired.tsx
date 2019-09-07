// 토큰 있을 시 아전 페이지로 이동
import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {IRootState} from '../src/reducers';
import {useSelector} from 'react-redux';

const anonRequired = <T extends {}>(Target: React.ComponentType) => {
  const AnonRequired = ({history, ...props}: T & RouteComponentProps) => {
    const {session: {access}} = useSelector(({system}: IRootState) => system);

    if (access) {
      alert('이미 로그인 하였습니다.');
      history.goBack();
    }

    return <Target {...props}/>;
  };

  return withRouter(AnonRequired);
};

export default anonRequired;
