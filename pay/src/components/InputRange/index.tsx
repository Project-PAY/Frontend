import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../../styles/variables.types';

interface Props {
  value: any;
  name?: string;
  min?: number;
  disabled?: boolean;
  max?: number;
  step?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Div = styled.div`
  margin-top: 38px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  width: calc(100% - 60px);
  display: block;
  margin: 0 auto;
  background: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 60px;
    width: 60px;
    background-color: ${$MAIN};
    border: 4px solid ${$WHTIE};
    cursor: pointer;
    margin-top: -27px;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background-color: ${$WHTIE};
  }
`;

const InputRange: React.FC<Props> = React.memo(({...rest}) => (
  <Div>
    <Input
      type="range"
      {...rest}
    />
  </Div>
));

export default InputRange;
