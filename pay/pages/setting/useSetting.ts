import * as React from 'react';
import {Dig} from '../../src/@types/common';
import {RouteComponentProps} from 'react-router';
import InfoApi from '../../src/apis/InfoApi';
import useAccessNeededFunc from '../../hooks/useAccessNeededFunc';
import {IBaseInfo} from '../../src/@types/info';
import withoutSpecificStr from '../../src/lib/withoutSpecificStr';
import onChangeInput, {TInputType} from '../../src/lib/onChangeInput';

const useSetting = (history: Dig<RouteComponentProps, 'history'>) => {
  const infoApi: InfoApi = useAccessNeededFunc(access => new InfoApi(access));

  const [form, setForm] = React.useState<IBaseInfo>({
    current_money: '',
    has_fixed_income: false,
    fixed_income: '',
    income_cycle: ''
  });

  const isProperForm = (form: IBaseInfo): [boolean, (string | IBaseInfo)] => {
    const {
      current_money,
      has_fixed_income,
      fixed_income,
      income_cycle
    } = form;

    if (!current_money.trim()) {
      return [false, '소지한 돈을 입력해주세요!'];
    } else if (has_fixed_income && !fixed_income.trim()) {
      return [false, '고정 수입을 입력해주세요!'];
    } else if (has_fixed_income && (!income_cycle || parseInt(income_cycle, 10) === 0)) {
      return [false, '수입 주기를 입력해주세요!'];
    }

    return [true, {
      current_money: withoutSpecificStr(current_money, ','),
      has_fixed_income,
      fixed_income: withoutSpecificStr(fixed_income, ','),
      income_cycle
    }];
  };

  const onCompleteSetting = (form: IBaseInfo) => {
    const [isProper, result] = isProperForm(form);

    if (isProper) {
      // API가 없는 상황이므로 임시 주석 처리
      // infoApi.setBaseInfo(result as IBaseInfo)
      //   .then(() => {
      //     history.push('/main');
      //   })
      //   .catch(err => {
      //     console.error(err);
      //   });
      history.push('/main');
    } else {
      alert(result);
    }
  };

  const onToggleOption = () => setForm(curr => ({
    ...curr,
    has_fixed_income: !curr.has_fixed_income,
    fixed_income: '',
    income_cycle: ''
  }));

  const onChangeSetForm = (e: React.ChangeEvent<HTMLInputElement>, type: TInputType) => {
    const {name, value} = onChangeInput(e, 'money');

    setForm(curr => ({
      ...curr,
      [name]: value
    }));
  };

  return {
    form,
    onCompleteSetting,
    onToggleOption,
    onChangeSetForm
  };
};

export default useSetting;
