import * as React from 'react';
import styled from 'styled-components';
import {$WHTIE} from '../../../styles/variables.types';
import {opacityMixin} from '../../../styles/mixins.styles';

interface Props {
  height: number;
}

const Div = styled.div<Props>`
  width: 10px;
  height: ${({height}) => height}px;
  background-color: ${$WHTIE};
  ${opacityMixin(0.2)};
  display: inline-block;
  vertical-align: bottom;
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

const Bar: React.FC<Props> = React.memo(({height}) => (
  <Div height={height}/>
));

export default Bar;
