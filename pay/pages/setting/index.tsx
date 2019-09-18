import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../styles/variables.types';
import TitleComp from '../../src/components/common/TitleComp';
import LinkBtn from '../../src/components/common/LinkBtn';
import anonRequired from '../../hocs/anonRequired';
import Input from '../../src/components/Input/Input';
import InputRange from '../../src/components/Input/InputRange';
import useInput from '../../src/components/Input/useInput';
import {fontStyleMixin} from '../../styles/mixins.styles';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const Span = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 22px;
  ${fontStyleMixin({
    size: 13,
    family: 'NanumSquare',
    weight: '600',
    color: $WHTIE
  })};
`;

const Setting = () => {
  const {
    form,
    isProperForm,
    onCompleteSetting,
    onChangeInput
  } = useInput();

  return (
    <Div>
      <TitleComp/>
      <div>
        <Input
          name="current_money"
          value={form.current_money}
          placeholder="소지한 돈을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeInput(e, 'money')
          }
          // @TODO: form 관련 타입 개선
          additional={(form.current_money as string).trim() && (
            <Span>원</Span>
          )}
        />
        <Input
          value=""
          placeholder="고정 수입이 있나요?"
          readOnly
        />
        {form.has_fixed_income && (
          <>
            <Input
              name="fixed_income"
              value={form.fixed_income}
              placeholder="고정 수입을 입력하세요."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeInput(e, 'money')
              }
              additional={(form.fixed_income as string).trim() && (
                <Span>원</Span>
              )}
            />
            <Input
              name="income_cycle"
              value={form.income_cycle}
              placeholder="수입 주기를 입력하세요."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeInput(e, 'date')
              }
              additional={(form.income_cycle as string).trim() && (
                <Span>일</Span>
              )}
            />
            <InputRange
              min={1}
              max={365}
              step={1}
              value={form.income_cycle || 1}
              name="income_cycle"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeInput(e, 'date')
              }
            />
          </>
        )}
      </div>
      <LinkBtn
        text="설정하기"
        type="button"
        // onClick={} - call onCompleteSetting
      />
    </Div>
  );
};

export default anonRequired(Setting);
