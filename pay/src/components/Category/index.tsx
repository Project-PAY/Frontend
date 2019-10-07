import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../../styles/variables.types';
import {fontStyleMixin} from '../../../styles/mixins.styles';
import Radio from '../common/Radio';
import useCategory from './useCategory';

const Div = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${$MAIN};
`;

const CenterDiv = styled.div`
  width: calc(100% - 60px);
  height: 100%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  ${fontStyleMixin({
    family: 'Gotham-Bold',
    size: 40,
    color: $WHTIE
  })};
  padding-top: 70px;
  margin-block-end: 0;
`;

const Category = React.memo(() => {
  const {
    categories,
    category,
    changeCategory
  } = useCategory();

  return (
    <Div>
      <CenterDiv>
        <H1>Category</H1>
        <ul>
          {categories.map(({
            label,
            value
          }) => (
            <li key={value}>
              <Radio
                checked={category === value}
                label={label}
                onClick={changeCategory(value)}
              />
            </li>
          ))}
        </ul>
      </CenterDiv>
    </Div>
  );
});

export default Category;
