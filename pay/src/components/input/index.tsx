import * as React from 'react';
import styled from 'styled-components';
import {$WHTIE} from '../../../styles/variables.types';
import { fontStyleMixin } from '../../../styles/mixins.styles';

interface Props {
  type?: string;
  value: any;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const StyledInput = styled.input`
  display: block;
  position: relative;
  width: calc(100% - 60px);
  height: 60px;
  border: 4px solid ${$WHTIE};
  margin: 0 auto 12px auto;
  box-sizing: border-box;
  background-color: transparent;
  ${fontStyleMixin({
    family: 'NanumSquare',
    size: 14,
    color: $WHTIE
  })};
  padding-left: 22px;

  ::placeholder {
    color: ${$WHTIE};
  }
`;

const Input: React.FC<Props> = React.memo(({
  type = 'text',
  placeholder = '입력해주세요.',
  value,
  maxLength = 50,
  disabled = false,
  name,
  onChange,
  className
}) => (
  <StyledInput
    type={type}
    placeholder={placeholder}
    value={value}
    maxLength={maxLength}
    disabled={disabled}
    name={name}
    onChange={onChange}
    className={className}
  />
));

export default Input;
