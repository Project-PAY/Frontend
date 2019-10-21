import * as React from 'react';

interface ICategory {
  label: string;
  value: string;
}

const incomeCategories: ICategory[] = [
  {
    label: 'Test',
    value: 'Test'
  }
];

const expenditureCategories: ICategory[] = [
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

const useCategory = () => {
  const [category, setCategory] = React.useState('');

  const changeCategory = React.useCallback((value: string) => () => {
    setCategory(value);
  }, []);

  return {
    expenditureCategories,
    incomeCategories,
    category,
    changeCategory
  };
};

export default useCategory;
