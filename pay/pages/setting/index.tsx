import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../styles/variables.types';
import TitleComp from '../../src/components/common/TitleComp';
import LinkBtn from '../../src/components/common/LinkBtn';
import anonRequired from '../../hocs/anonRequired';
import useAccessNeededFunc from '../../hooks/useAccessNeededFunc';
import InfoApi from '../../src/apis/InfoApi';
import Input from '../../src/components/Input';
import {IBaseInfo} from '../../src/@types/info';
import containOnlyNumber from '../../src/lib/containOnlyNumber';
import withoutSpecificStr from '../../src/lib/withoutSpecificStr';
import withCommaNotation from '../../src/lib/withCommaNotation';
import InputRange from '../../src/components/InputRange';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const Setting = () => {
  const infoApi: InfoApi = useAccessNeededFunc(access => new InfoApi(access));

  const [form, setForm] = React.useState<IBaseInfo>({
    current_money: '',
    has_fixed_income: true, // initial: false
    fixed_income: '',
    income_cycle: ''
  });

  // 임시
  const isProperForm = React.useCallback((form: any) => {
    return [true, {}]; // OR [false, 'Error Text']
  }, []);

  const onCompleteSetting = React.useCallback(() => {
    const [isProper, form] = isProperForm({});

    if (isProper) {
      // API 호출 및 action dispatch
      alert('Hello');
      console.dir(form);
    } else {
      alert(isProper);
    }
  }, []);

  const onChangeInput = React.useCallback((
    {target: {name, value}}: React.ChangeEvent<HTMLInputElement>,
    type: 'normal' | 'money' | 'date' = 'normal'
  ) => {
    switch(type) {
      case 'normal':
        containOnlyNumber(value) && setForm(curr => ({
          ...curr,
          [name]: value
        }));
        break;
      case 'money':
        containOnlyNumber(withoutSpecificStr(value, ',')) && setForm(curr => ({
          ...curr,
          [name]: withCommaNotation(
            withoutSpecificStr(value, ',')
          )
        }));
        break;
      case 'date':
        (value === '' || parseInt(value, 10) <= 365) && setForm(curr => ({
          ...curr,
          [name]: value
        }));
        break;
      default:
        break;
    }

    return null;
  }, []);

  return (
    <Div>
      <TitleComp/>
      <div>
        <Input
          name="current_money"
          value={form.current_money}
          placeholder="소지한 돈을 입력하세요."
          onChange={e => onChangeInput(e, 'money')}
          // @TODO: form 관련 타입 개선
          suffix={(form.current_money as string).trim() && '원'}
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
              onChange={e => onChangeInput(e, 'money')}
              suffix={(form.fixed_income as string).trim() && '원'}
            />
            <Input
              name="income_cycle"
              value={form.income_cycle}
              placeholder="수입 주기를 입력하세요."
              onChange={e => onChangeInput(e, 'date')}
              suffix={(form.income_cycle as string).trim() && '일'}
            />
            <InputRange
              min={1}
              max={365}
              step={1}
              value={form.income_cycle || 1}
              name="income_cycle"
              onChange={e => onChangeInput(e, 'date')}
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
