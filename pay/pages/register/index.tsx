import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../styles/variables.types';
import goBack from '../../src/assets/icons/icon-go-back.png';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const GoBackImg = styled.img`
  position: absolute;
  width: 29px;
  top: 60px;
  left: 30px;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Div>
      <GoBackImg
        src={goBack}
        alt="뒤로가기"
      />
    </Div>
  );
};

export default Register;
