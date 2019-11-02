import * as React from 'react';
import styled, {keyframes} from 'styled-components';
import {$MAIN, $WHTIE} from '../../../styles/variables.types';
import {fontStyleMixin} from '../../../styles/mixins.styles';
import Radio from '../common/Radio';
import useCategory from './useCategory';
import {expenditureCategories, incomeCategories} from './category';
import closeIcon from '../../assets/icons/icon-close.png';

const testAnimation = keyframes`
  from {
    top: 100%;
  }

  to {
    top: 0;
  }
`;

const Div = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${$MAIN};
  animation: ${testAnimation} .4s ease forwards;
`;

const CenterDiv = styled.div`
  position: relative;
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

const Img = styled.img`
  position: absolute;
  width: 30px;
  top: 43px;
  right: 0;
  cursor: pointer;
`;

const Ul = styled.ul`
  text-align: center;
  margin-top: 38px;

  li {
    display: inline-block;
    margin: 8px;
  }
`;

interface ICategoryCompProps {
  checked: boolean;
  label: string;
  onClick: () => void;
}

const CategoryComp: React.FC<ICategoryCompProps> = React.memo(({
  checked,
  label,
  onClick
}) => (
  <li>
    <Radio
      checked={checked}
      label={label}
      onClick={onClick}
    />
  </li>
));

interface Props {
  type: 'expenditure' | 'income';
  onClose: () => void;
}

const Category: React.FC<Props> = React.memo(({
  type,
  onClose
}) => {
  const {
    category,
    changeCategory
  } = useCategory();

  return (
    <Div>
      <CenterDiv>
        <H1>Category</H1>
        <Img
          src={closeIcon}
          alt="닫기"
          onClick={onClose}
        />
        <Ul>
          {(type === 'expenditure'
            ? expenditureCategories
            : incomeCategories
          ).map(({label, value}) => (
            <CategoryComp
              key={value}
              checked={category === value}
              label={label}
              onClick={changeCategory(value)}
            />
          ))}
        </Ul>
      </CenterDiv>
    </Div>
  );
});

export default Category;
