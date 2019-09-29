import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../styles/variables.types';
import goBack from '../../src/assets/icons/icon-go-back.png';
import {RouteComponentProps} from 'react-router';
import TabBtn from '../../src/components/common/Button/TabBtn';
import Input from '../../src/components/Input/Input';
import SuffixSpan from '../../src/components/Input/SuffixSpan';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const CenterDiv = styled.div`
  position: relative;
  width: calc(100% - 60px);
  height: 100%;
  margin: 0 auto;
`;

const GoBackImg = styled.img`
  position: absolute;
  width: 29px;
  left: 0;
  top: 60px;
  cursor: pointer;
`;

const TabButtonUl = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
`;

const RegisterSpace = styled.div`
  height: 100%;
`;

const StyledInput = styled(Input)`
  width: 100%;
  top: 140px;

  input {
    border: 0;
    border-bottom: 4px solid ${$WHTIE};
    font-size: 24px;
    font-weight: 800;

    ::placeholder {
      font-weight: 400;
    }
  }
`;

const StyledSuffixSpan = styled(SuffixSpan)`
  top: 45%;
  font-size: 22px;
  font-weight: 800;
`;

interface Props extends RouteComponentProps {
}

const Register: React.FC<Props> = ({history}) => {
  const [isExpenditureTab, toggleTab] = React.useState(true);

  return (
    <Div>
      <CenterDiv>
        <GoBackImg
          src={goBack}
          alt="뒤로가기"
          onClick={() => {
            history.push('/main');
          }}
        />
        <TabButtonUl>
          <TabBtn
            name="지출"
            isActive={isExpenditureTab}
            onToggleTab={() => toggleTab(true)}
          />
          <TabBtn
            name="수입"
            isActive={!isExpenditureTab}
            onToggleTab={() => toggleTab(false)}
          />
        </TabButtonUl>
        <RegisterSpace>
          <StyledInput
            placeholder={`${isExpenditureTab ? '지출' : '수입'}을 입력해주세요.`}
            value=""
            additional={(
              <StyledSuffixSpan text="원"/>
            )}
          />
        </RegisterSpace>
      </CenterDiv>
    </Div>
  );
};

export default Register;
