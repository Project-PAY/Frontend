import * as React from 'react';
import InfoApi from '../../apis/InfoApi';
import useAccessNeededFunc from '../../../hooks/useAccessNeededFunc';
import {IBaseInfo} from '../../@types/info';
import containOnlyNumber from '../../lib/containOnlyNumber';
import withoutSpecificStr from '../../lib/withoutSpecificStr';
import withCommaNotation from '../../lib/withCommaNotation';

const useInput = () => {
  const infoApi: InfoApi = useAccessNeededFunc(access => new InfoApi(access));

  const [form, setForm] = React.useState<IBaseInfo>({
    current_money: '',
    has_fixed_income: false,
    fixed_income: '',
    income_cycle: ''
  });

  const isProperForm = (form: any) => {
    return [true, {}]; // OR [false, 'Error Text']
  };

  const onCompleteSetting = () => {
    const [isProper, form] = isProperForm({});

    if (isProper) {
      // API 호출 및 action dispatch
      alert('Hello');
      console.dir(form);
    } else {
      alert(isProper);
    }
  };

  const onToggleOption = () => setForm(curr => ({
    ...curr,
    has_fixed_income: !curr.has_fixed_income
  }));

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
    setForm,
    isProperForm,
    onCompleteSetting,
    onChangeInput,
    onToggleOption
  };
};

export default useInput;
