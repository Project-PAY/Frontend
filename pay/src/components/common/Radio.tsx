import * as React from 'react';
import styled from 'styled-components';
import {fontStyleMixin} from '../../../styles/mixins.styles';
import {$WHTIE, $MAIN} from '../../../styles/variables.types';
import uuid from 'uuid/v4';

const Label = styled.label`
  position: relative;
  display: block;
  width: 146px;
  height: 60px;
`;

const Input = styled.input`
  display: none;
`;

const Span = styled.span<{isChecked: boolean;}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 60px;
  box-sizing: border-box;
  border: 4px solid rgba(255, 255, 255, .6);
  ${fontStyleMixin({
    family: 'Nanumsquare',
    size: 18,
    weight: '800',
    color: $WHTIE
  })};
  transition: .25s;

  ${({isChecked}) => isChecked && {
    backgroundColor: $WHTIE,
    color: $MAIN
  }};
`;

interface Props {
  label: string;
  className?: string;
  checked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

const Radio: React.FC<Props> = React.memo(({
  label,
  className,
  checked,
  onClick
}) => {
  const [forId] = React.useState(uuid());

  return (
    <Label
      htmlFor={forId}
      className={className}
      onClick={onClick}
    >
      <Input
        type="Radio"
        id={forId}
        checked={checked}
      />
      <Span isChecked={checked}>{label}</Span>
    </Label>
  );
});

export default Radio;
