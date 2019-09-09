import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IRootState} from '../../src/reducers';
import styled from 'styled-components';
import {SECOND} from '../../src/constants/times';

const Div = styled.div`
`;

const Span = styled.span`
`;

interface Props extends RouteComponentProps {
}

const Splash: React.FC<Props> = ({history}) => {
  const {session: {access}} = useSelector(({system}: IRootState) => system);
  
  React.useEffect(() => {
    setTimeout(() => {
      const to = access ? '/main' : '/welcome';
      history.replace(to);
    }, 2.5 * SECOND);
  }, []);

  return (
    <Div>
      <Span>PAY</Span>
    </Div>
  );
};

export default Splash;
