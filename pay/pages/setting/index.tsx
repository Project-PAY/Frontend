import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../styles/variables.types';
import TitleComp from '../../src/components/TitleComp';
import LinkBtn from '../../src/components/LinkBtn';
import anonRequired from '../../hocs/anonRequired';
import Input from '../../src/components/Input/Input';
import InputRange from '../../src/components/Input/InputRange';
import useInput from '../../src/components/Input/useInput';
import {fontStyleMixin, backgroundImgMixin} from '../../styles/mixins.styles';
import IconDownArrow from '../../src/assets/icons/icon-down-arrow.png';
import IconUpArrow from '../../src/assets/icons/icon-up-arrow.png';
import {RouteComponentProps} from 'react-router';
import OGMetaHead from '../../src/components/common/OGMetaHead';

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

const ArrowDiv = styled.div<{isOpened: boolean;}>`
  box-sizing: border-box;
  position: absolute;
  width: 60px;
  height: 58px;
  border-left: 4px solid ${$WHTIE};
  top: 1px;
  right: 3px;
  cursor: pointer;
  ${({isOpened}) => backgroundImgMixin({
    img: isOpened ? IconUpArrow : IconDownArrow,
    size: '20px'
  })};
`;

const CurrentMoneyInput = styled(Input)`
  margin-top: 34px;
`;

interface Props extends RouteComponentProps {
}

const SuffixSpan: React.FC<{text: string}> = React.memo(({text}) => (
  <Span>{text}</Span>
));

const SetOptionBtn: React.FC<{
  isOpened: boolean;
  onToggleOption: () => void;
}> = React.memo(({isOpened, onToggleOption}) => (
  <ArrowDiv
    isOpened={isOpened}
    onClick={onToggleOption}
  />
));

const Setting: React.FC<Props> = ({history}) => {
  const {
    form,
    onCompleteSetting,
    onChangeInput,
    onToggleOption
  } = useInput(history);

  return (
    <Div>
      <OGMetaHead title="기본 설정"/>
      <TitleComp/>
      <div>
        <CurrentMoneyInput
          name="current_money"
          value={form.current_money}
          placeholder="소지한 돈을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeInput(e, 'money')
          }
          additional={form.current_money.trim() && (
            <SuffixSpan text="원"/>
          )}
        />
        <Input
          value=""
          placeholder="고정 수입이 있나요?"
          readOnly
          additional={(
            <SetOptionBtn
              isOpened={form.has_fixed_income}
              onToggleOption={onToggleOption}
            />
          )}
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
              additional={form.fixed_income.trim() && (
                <SuffixSpan text="원"/>
              )}
            />
            <Input
              name="income_cycle"
              value={form.income_cycle}
              placeholder="수입 주기를 입력하세요."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeInput(e, 'date')
              }
              additional={form.income_cycle.trim() && (
                <SuffixSpan text="일"/>
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
        onClick={() => {
          onCompleteSetting(form);
        }}
      />
    </Div>
  );
};

export default anonRequired(Setting);
