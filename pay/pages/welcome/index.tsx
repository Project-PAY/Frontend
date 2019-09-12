import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../styles/variables.types';
import TitleComp from '../../src/components/common/TitleComp';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const Welcome = () => {
  return (
    <Div>
      <TitleComp/>
    </Div>
  );
};

export default Welcome;
