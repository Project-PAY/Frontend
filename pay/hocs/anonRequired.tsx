import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {IRootState} from '../src/reducers';
import {useSelector} from 'react-redux';
import isEqual from 'lodash/isEqual';

// @TODO: AnonRequired any 타입 수정
const anonRequired = <T extends {}>(Target: React.FC<T>) => {
  const AnonRequired = ({...props}: /* T & RouteComponentProps */ any) => {
    const {session: {access}} = useSelector(
      ({system}: IRootState) => system,
      (prev, curr) => isEqual(prev, curr)
    );

    if (access) {
      alert('이미 로그인 하였습니다.');
      props.history.replace('/main');
    }

    return <Target {...props}/>;
  };

  return withRouter(AnonRequired);
};

export default anonRequired;
