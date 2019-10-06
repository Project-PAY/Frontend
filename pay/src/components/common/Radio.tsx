import * as React from 'react';
import styled from 'styled-components';
import { fontStyleMixin } from '../../../styles/mixins.styles';
import { $WHTIE, $MAIN } from '../../../styles/variables.types';

const Label = styled.label`
  position: relative;
  display: block;
`;

const Input = styled.input`
  display: none;

  :checked ~ span {
    background-color: ${$WHTIE};
    color: ${$MAIN};
  }
`;

const Span = styled.span`
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
  })}
`;

interface Props {
  forId: string;
  title: string;
  className?: string;
}

const Radio: React.FC<Props> = React.memo(({
  forId,
  title,
  className
}) => {
  return (
    <Label
      htmlFor={forId}
      className={className}
    >
      <Input
        type="Radio"
        id={forId}
      />
      <Span>{title}</Span>
    </Label>
  );
});

export default Radio;
