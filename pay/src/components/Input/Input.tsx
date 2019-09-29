// @TODO: Input 컴포넌트 기능에 따라 여러개로 분리

import * as React from 'react';
import styled from 'styled-components';
import {$WHTIE} from '../../../styles/variables.types';
import {fontStyleMixin} from '../../../styles/mixins.styles';

interface Props {
  type?: string;
  value: any;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  additional?: React.ReactNode | React.ComponentType;
  readOnly?: boolean;
}

const Div = styled.div`
  position: relative;
  width: calc(100% - 60px);
  margin: 0 auto 12px auto;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 60px;
  border: 4px solid ${$WHTIE};
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
  value = '',
  onChange,
  className,
  additional,
  ...props
}) => (
  <Div className={className}>
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        onChange && onChange(e);
      }}
      {...props}
    />
    {additional}
  </Div>
));

export default Input;
