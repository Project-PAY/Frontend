import * as React from 'react';
import styled from 'styled-components';
import {$BORDER, $BLACK} from '../../../styles/variables.types';
import {IMenu} from './menus';
import {fontStyleMixin, opacityMixin, verticalAlignMixin} from '../../../styles/mixins.styles';

const Li = styled.li`
  position: relative;
  height: 76px;
  border-bottom: 1px solid ${$BORDER};
  margin: 0 20px;
`;

const Img = styled.img<{isMoneyType: boolean;}>`
  width: ${({isMoneyType}) => isMoneyType ? '16px' : '20px'};
  ${verticalAlignMixin()};
`;

const H2 = styled.h2`
  ${fontStyleMixin({
    family: 'nanumsquare',
    size: 14,
    weight: '800'
  })};
  padding: 22px 0 5px 44px;
`;

const H3 = styled.h3`
  ${fontStyleMixin({
    family: 'nanumsquare',
    size: 12,
    color: $BLACK
  })};
  ${opacityMixin(0.5)};
  padding-left: 44px;
`;

const Span = styled.span`
  ${fontStyleMixin({
    family: 'nanumsquare',
    size: 14,
    weight: '600'
  })};
  ${verticalAlignMixin()};
  right: 0;
`;

const Info: React.FC<IMenu> = React.memo(({
  title,
  subTitle,
  src,
  value,
  suffix
}) => (
  <Li>
    <Img
      src={src}
      alt={title}
      isMoneyType={suffix === '원'}
    />
    <H2>{title}</H2>
    <H3>{subTitle}</H3>
    <Span>{value} {suffix}</Span>
  </Li>
));

export default Info;
