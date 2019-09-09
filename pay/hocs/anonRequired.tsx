import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {IRootState} from '../src/reducers';
import {useSelector} from 'react-redux';
import isEqual from 'lodash/isEqual';

// @TODO: 페이지 뒤로 이동이 아닌 메인페이지로 이동되도록 코드 수정
const anonRequired = <T extends {}>(Target: React.ComponentType) => {
  const AnonRequired = ({history, ...props}: T & RouteComponentProps) => {
    const {session: {access}} = useSelector(
      ({system}: IRootState) => system,
      (prev, curr) => isEqual(prev, curr)
    );

    if (access) {
      alert('이미 로그인 하였습니다.');
      history.goBack();
    }

    return <Target {...props}/>;
  };

  return withRouter(AnonRequired);
};

export default anonRequired;
