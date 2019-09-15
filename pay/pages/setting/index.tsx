import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../styles/variables.types';
import TitleComp from '../../src/components/common/TitleComp';
import LinkBtn from '../../src/components/common/LinkBtn';
import anonRequired from '../../hocs/anonRequired';
import useAccessNeededFunc from '../../hooks/useAccessNeededFunc';
import InfoApi from '../../src/apis/InfoApi';
import Input from '../../src/components/input';
import {IBaseInfo} from '../../src/@types/info';
import containOnlyNumber from '../../src/lib/containOnlyNumber';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const Setting = () => {
  const infoApi: InfoApi = useAccessNeededFunc(access => new InfoApi(access));

  const [form, setForm] = React.useState<IBaseInfo>({
    current_money: '',
    has_fixed_income: false,
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
    type: 'normal' | 'money' = 'normal'
  ) => {
    if (containOnlyNumber(type === 'normal' ? value : '')) {
      setForm(curr => ({
        ...curr,
        [name]: type === 'normal'
          ? value
          : ''
      }));
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
          onChange={e => onChangeInput(e)}
          // @TODO: form 관련 타입 개선
          suffix={(form.current_money as string).trim() && '원'}
        />
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
