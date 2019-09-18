import * as React from 'react';
import InfoApi from '../../apis/InfoApi';
import useAccessNeededFunc from '../../../hooks/useAccessNeededFunc';
import {IBaseInfo} from '../../@types/info';
import containOnlyNumber from '../../lib/containOnlyNumber';
import withoutSpecificStr from '../../lib/withoutSpecificStr';
import withCommaNotation from '../../lib/withCommaNotation';
import {Dig} from '../../@types/common';
import {RouteComponentProps} from 'react-router';

const useInput = (history: Dig<RouteComponentProps, 'history'>) => {
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

  // @TODO: useCallback에 대한 정확한 조사
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

  return {
    form,
    onCompleteSetting,
    onChangeInput,
    onToggleOption
  };
};

export default useInput;
