import * as React from 'react';
import OGMetaHead from '../src/components/common/OGMetaHead';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../styles/variables.types';

const Div = styled.div`
  height: 100%;
`;

const Header = styled.header`
  position: relative;
  height: 240px;
  background-color: ${$MAIN};
  padding-left: 30px;
`;

const Ul = styled.ul`
  height: calc(100% - 240px);
  background-color: ${$WHTIE}
`;

// @TODO: loginRequired hoc 적용
const Main = () => {
  return (
    <Div>
      <OGMetaHead title="메인페이지"/>
      <Header>
      </Header>
      <Ul>
      </Ul>
    </Div>
  );
};

export default Main;
