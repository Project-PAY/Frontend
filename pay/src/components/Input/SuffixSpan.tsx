import * as React from 'react';
import styled from 'styled-components';
import {fontStyleMixin} from '../../../styles/mixins.styles';
import {$WHTIE} from '../../../styles/variables.types';

const Span = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 22px;
  ${fontStyleMixin({
    size: 13,
    family: 'NanumSquare',
    weight: '600',
    color: $WHTIE
  })};
`;

const SuffixSpan: React.FC<{text: string}> = React.memo(({text}) => (
  <Span>{text}</Span>
));

export default SuffixSpan;
