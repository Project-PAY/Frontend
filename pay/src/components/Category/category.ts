interface ICategory {
  label: string;
  value: string;
}

export const incomeCategories: ICategory[] = [
  {
    label: '월급',
    value: 'salary'
  },
  {
    label: '용돈',
    value: 'pocketMoney'
  },
  {
    label: '보너스',
    value: 'bonus'
  },
  {
    label: '수당',
    value: 'extraPay'
  },
  {
    label: '기타',
    value: 'pay'
  },
];

export const expenditureCategories: ICategory[] = [
  {
    label: '식비',
    value: 'food'
  },
  {
    label: '교통비',
    value: 'transportation'
  },
  {
    label: '문화생활',
    value: 'culture'
  },
  {
    label: '쇼핑',
    value: 'shopping'
  },
  {
    label: '커피',
    value: 'coffee'
  },
  {
    label: '의류',
    value: 'clothes'
  },
  {
    label: '자기계발',
    value: 'selfImprovement'
  },
  {
    label: '운동',
    value: 'exercise'
  },
  {
    label: '데이트',
    value: 'date'
  },
  {
    label: '게임',
    value: 'game'
  },
  {
    label: '투자',
    value: 'investment'
  },
  {
    label: '기타',
    value: 'etc'
  }
];
