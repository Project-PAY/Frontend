import * as React from 'react';

const useCategory = () => {
  const [category, setCategory] = React.useState('');

  return {
    category,
    setCategory
  };
};

export default useCategory;
