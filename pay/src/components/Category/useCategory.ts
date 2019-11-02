import * as React from 'react';

const useCategory = () => {
  const [category, setCategory] = React.useState('');

  const changeCategory = React.useCallback((value: string) => () => {
    setCategory(value);
  }, []);

  return {
    category,
    changeCategory
  };
};

export default useCategory;
