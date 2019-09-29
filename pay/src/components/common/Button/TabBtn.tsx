import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../../../styles/variables.types';
import {fontStyleMixin} from '../../../../styles/mixins.styles';

interface Props {
  name: string;
  isActive: boolean;
  onToggleTab: () => void;
}

type TCommonButtonProps = Pick<Props, 'isActive'>;

const ButtonLi = styled.li<TCommonButtonProps>`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: 80px;
  height: 29px;
  border: ${({isActive}) => !isActive && '4px solid rgba(255, 255, 255, .6)'};
  background-color: ${({isActive}) => isActive ? $WHTIE : 'transparent'};
  text-align: center;
  cursor: pointer;

  :last-child {
    margin-left: 10px;
  }
`;

const Button = styled.button<TCommonButtonProps>`
  ${({isActive}) => fontStyleMixin({
    color: isActive ? $MAIN : $WHTIE,
    size: 14,
    family: 'nanumsquare',
    weight: '800'
  })};
  padding-top: ${({isActive}) => isActive && '5px'};
`;

const TabBtn: React.FC<Props> = React.memo(({
  name,
  isActive,
  onToggleTab
}) => (
  <ButtonLi
    isActive={isActive}
    onClick={onToggleTab}
  >
    <Button isActive={isActive}>
      {name}
    </Button>
  </ButtonLi>
));

export default TabBtn;
