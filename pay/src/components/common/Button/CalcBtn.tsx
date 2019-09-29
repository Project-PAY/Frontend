import * as React from 'react';
import styled from 'styled-components';
import {$WHTIE} from '../../../../styles/variables.types';
import {fontStyleMixin} from '../../../../styles/mixins.styles';

const MIN_WIDTH_HEIGHT = 40;
const MAX_WIDTH_HEIGHT = 200;

const ButtonLi = styled.li`
  min-width: ${MIN_WIDTH_HEIGHT}px;
  max-width: ${MAX_WIDTH_HEIGHT}px;
  width: calc((100vw / 3) - 40px);
  min-height: ${MIN_WIDTH_HEIGHT}px;
  max-height: ${MAX_WIDTH_HEIGHT}px;
  height: calc((100vw / 3) - 40px);
  box-sizing: border-box;
  border: 4px solid rgba(255, 255, 255, .6);
  display: inline-flex;
  justify-content: center;
  margin: 0 30px 14px 0;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    :nth-child(3n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    :nth-child(3n) {
      margin-right: 30px;
    }

    :nth-child(4n) {
      margin-right: 0;
    }
  }
`;

const Button = styled.button`
  ${fontStyleMixin({
    size: 24,
    color: $WHTIE,
    weight: '800',
    family: 'nanumsquare'
  })};
  background-color: transparent;
  border: 0;
`;

interface Props {
  name: string;
  value?: string;
  children: string | React.ReactNode;
}

const CalcBtn: React.FC<Props> = React.memo(({
  name,
  value,
  children
}) => (
  <ButtonLi>
    <Button
      name={name}
      value={value}
    >
      {children}
    </Button>
  </ButtonLi>
));

export default CalcBtn;
