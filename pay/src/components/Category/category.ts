interface ICategory {
  label: string;
  value: string;
}

export const incomeCategories: ICategory[] = [
  {
    label: 'Test',
    value: 'Test'
  }
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
  }
];
