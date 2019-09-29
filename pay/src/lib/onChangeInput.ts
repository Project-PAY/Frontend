import {Dig} from '../@types/common';
import containOnlyNumber from './containOnlyNumber';
import withoutSpecificStr from './withoutSpecificStr';
import withCommaNotation from './withCommaNotation';

export type TInputType = 'normal' | 'money' | 'date';
type TargetType = Dig<React.ChangeEvent<HTMLInputElement>, 'target'>;

// @TODO: onChangeInput 테스트 코드 작성
const onChangeInput = (
  {target: {name, value}}: {target: TargetType},
  type: TInputType = 'normal',
  prevState: string
): {
  name: string;
  value: string;
} => {
  switch(type) {
    case 'normal':
      return containOnlyNumber(value)
        ? {name, value}
        : {name, value: prevState};
    case 'money':
      return containOnlyNumber(withoutSpecificStr(value, ','))
        ? {
          name,
          value: withCommaNotation(
            withoutSpecificStr(value, ',')
          )
        }
        : {
          name,
          value: prevState
        };
    case 'date':
      return (value === '' || parseInt(value, 10) <= 365)
        ? {name, value}
        : {name, value: prevState};
    default:
      return null;
  }
};

export default onChangeInput;
