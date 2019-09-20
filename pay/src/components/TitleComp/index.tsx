import * as React from 'react';
import styled, {css} from 'styled-components';
import {fontStyleMixin, opacityMixin} from '../../../styles/mixins.styles';
import {$WHTIE} from '../../../styles/variables.types';

const commonHeadingStyle = (size: number) => (
  css`
    ${fontStyleMixin({
      family: 'Gotham-Bold',
      color: $WHTIE,
      size
    })};
    padding-left: 30px;
  `
);

const H1 = styled.h1`
  margin-top: 0;
  padding-top: 90px;
  letter-spacing: -2px;
  ${commonHeadingStyle(40)};
`;

const H2 = styled.h2`
  letter-spacing: -0.5px;
  ${commonHeadingStyle(20)};
  ${opacityMixin(0.5)};
`;

interface Props {
  className?: string;
}

const TitleComp: React.FC<Props> = React.memo(({className}) => (
  <div className={className}>
    <H1>PAY</H1>
    <H2>How much you spent</H2>
  </div>
));

export default TitleComp;
