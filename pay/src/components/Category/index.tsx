import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../../styles/variables.types';
import {fontStyleMixin} from '../../../styles/mixins.styles';

const Div = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${$MAIN};
`;

const H1 = styled.h1`
  ${fontStyleMixin({
    family: 'Gotham Bold'
  })}
`;

const Category = React.memo(() => {
  return (
    <Div>
      <H1>Category</H1>
    </Div>
  );
});

export default Category;
