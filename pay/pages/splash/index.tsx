import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IRootState} from '../../src/reducers';
import styled, {keyframes} from 'styled-components';
import {SECOND} from '../../src/constants/times';
import {$MAIN, $WHTIE} from '../../styles/variables.types';
import {fontStyleMixin} from '../../styles/mixins.styles';
import OGMetaHead from '../../src/components/common/OGMetaHead';

const spacingLetterAnimation = keyframes`
  from {
    letter-spacing: -5px;
  }

  to {
    letter-spacing: 0;
  }
`;

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  ${fontStyleMixin({
    color: $WHTIE,
    size: 60,
    family: 'Gotham-Bold'
  })};
  animation: ${spacingLetterAnimation} .6s ease .5s forwards;
  letter-spacing: -5px;
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
      <OGMetaHead/>
      <Span>PAY</Span>
    </Div>
  );
};

export default Splash;
