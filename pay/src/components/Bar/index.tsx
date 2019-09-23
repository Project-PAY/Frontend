import * as React from 'react';
import styled from 'styled-components';
import {$WHTIE} from '../../../styles/variables.types';

interface Props {
  height: number;
}

const Div = styled.div<Props>`
  width: 10px;
  height: ${({height}) => height}px;
  background-color: ${$WHTIE};
`;

const Bar: React.FC<Props> = React.memo(({height}) => (
  <Div height={height}/>
));

export default Bar;
