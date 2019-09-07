import * as React from 'react';
import Loading from '../src/components/common/Loading';
import {Indexable} from '../src/@types/global.d';

const lazy = (
  t: () => Promise<any>,
  fallback?: React.ReactNode
) => (props: Indexable) => {
  const Target = React.lazy<any>(t);

  return (
    <React.Suspense fallback={fallback || <Loading/>}>
      <Target {...props}/>
    </React.Suspense>
  );
};

export default lazy;
