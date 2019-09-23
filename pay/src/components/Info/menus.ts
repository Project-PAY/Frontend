import {InfoState} from "../../@types/info";
import percentIcon from '../../assets/icons/icon-percent.png';
import dollarIcon from '../../assets/icons/icon-dollar.png';
import resetIcon from '../../assets/icons/icon-reset.png';
import withCommaNotation from "../../lib/withCommaNotation";

interface IMenuType {
  title: string;
  subTitle: string;
  src: string;
  value: string;
  suffix: string;
}

const menus = (data: InfoState): IMenuType[] => {
  const {
    current_money,
    current_figure,
    left_day,
    today_expenditure,
    this_month_expenditure,
    last_month_expenditure
  } = data;

  return [
    {
      title: '현재 수치',
      subTitle: '현재 수치를 나타냅니다.',
      src: percentIcon,
      value: current_figure,
      suffix: '퍼센트'
    },
    {
      title: '남은 돈',
      subTitle: '현재 남은 돈을 나타냅니다.',
      src: dollarIcon,
      value: current_money,
      suffix: '원'
    },
    {
      title: '초기화',
      subTitle: '현재 남은 시간을 나타냅니다.',
      src: resetIcon,
      value: left_day,
      suffix: '일'
    },
    {
      title: '하루 지출액',
      subTitle: '오늘 하루 지출액을 나타냅니다.',
      src: dollarIcon,
      value: withCommaNotation(today_expenditure),
      suffix: '원'
    },
    {
      title: '이번 달 지출액',
      subTitle: '이번 한 달의 지출액을 나타냅니다.',
      src: dollarIcon,
      value: withCommaNotation(this_month_expenditure),
      suffix: '원'
    },
    {
      title: '저번 달 지출액',
      subTitle: '저번 한 달의 지출액을 나타냅니다.',
      src: dollarIcon,
      value: withCommaNotation(last_month_expenditure),
      suffix: '원'
    }
  ];
};

export default menus;
