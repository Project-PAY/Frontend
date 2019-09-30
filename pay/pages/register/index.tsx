import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../styles/variables.types';
import goBack from '../../src/assets/icons/icon-go-back.png';
import {RouteComponentProps} from 'react-router';
import TabBtn from '../../src/components/common/Button/TabBtn';
import Input from '../../src/components/Input/Input';
import SuffixSpan from '../../src/components/Input/SuffixSpan';
import CalcBtn from '../../src/components/common/Button/CalcBtn';
import backspaceIcon from '../../src/assets/icons/icon-backspace.png';
import withCommaNotation from '../../src/lib/withCommaNotation';
import withoutSpecificStr from '../../src/lib/withoutSpecificStr';

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

  @media screen and (max-width: 360px) {
    input {
      font-size: 16px;
    }
  }
`;

const StyledSuffixSpan = styled(SuffixSpan)`
  top: 46%;
  font-size: 22px;
  font-weight: 800;
`;

const CalcButtonUl = styled.ul`
  text-align: center;
  margin-top: 170px;

  @media screen and (max-width: 360px) {
    margin-top: 155px;
  }
`;

const BackspaceImg = styled.img`
  width: 24px;
`;

interface Props extends RouteComponentProps {
}

const CalcBtns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00'];

// @TODO: setState 관련 구문 개선
const Register: React.FC<Props> = ({history}) => {
  const [isExpenditureTab, toggleTab] = React.useState(true);
  const [money, setMoney] = React.useState('');

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
            value={money}
            readOnly
            additional={(
              <StyledSuffixSpan text="원"/>
            )}
          />
          <CalcButtonUl>
            {CalcBtns.map(value => (
              <CalcBtn
                key={value}
                name={value}
                value={value}
                onClick={() => setMoney(curr =>
                  // 값이 없는 상태에서 0이나 00을 먼저 입력하는 상황 방지
                  (!curr && (value === '0' || value === '00'))
                    ? curr
                    : withCommaNotation(
                      withoutSpecificStr(curr + value, ',')
                    )
                )}
              >
                {value}
              </CalcBtn>
            ))}
            <CalcBtn
              name="delete"
              onClick={() => setMoney(curr => {
                const value = curr.substring(0, curr.length - 1);

                return withCommaNotation(
                  withoutSpecificStr(value, ',')
                );
              })}
            >
              <BackspaceImg
                src={backspaceIcon}
                alt="지우기"
              />
            </CalcBtn>
          </CalcButtonUl>
        </RegisterSpace>
      </CenterDiv>
    </Div>
  );
};

export default Register;
