import * as React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {fontStyleMixin} from '../../../styles/mixins.styles';
import {$WHTIE, $ORANGE} from '../../../styles/variables.types';

interface Props {
  text: string;
  type: 'link' | 'button';
  to?: string;
  onClick?: () => void;
}

const commonStyle = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  border: 0;
  font-size: 14px;
  background-color: ${$ORANGE};
  cursor: pointer;
  ${fontStyleMixin({
    family: 'NanumSquare',
    color: $WHTIE,
    weight: '600'
  })};
`;

const StyledLink = styled(Link)`
  ${commonStyle}
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  ${commonStyle}
  display: block;
`;

const LinkBtn: React.FC<Props> = React.memo(({
  text,
  type,
  to,
  onClick
}) => (
  type === 'link' ? (
    <StyledLink to={to}>
      {text}
    </StyledLink>
  ) : (
    <Button onClick={onClick}>
      {text}
    </Button>
  )
));

export default LinkBtn;
