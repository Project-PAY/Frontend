import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../../../styles/variables.types';
import {fontStyleMixin} from '../../../styles/mixins.styles';
import Radio from '../common/Radio';
import useCategory from './useCategory';
import {expenditureCategories, incomeCategories} from './category';
import closeIcon from '../../assets/icons/icon-close.png';

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
  on: boolean;
  className?: string;
}

const Div = styled.div<Pick<Props, 'on'>>`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${$MAIN};
  transition: .4s;
  top: ${({on}) => on ? 0 : '100%'};
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

const Category: React.FC<Props> = React.memo(({
  type,
  onClose,
  on,
  className
}) => {
  const {
    category,
    setCategory
  } = useCategory();

  return (
    <Div
      className={className}
      on={on}
    >
      <CenterDiv>
        <H1>Category</H1>
        <Img
          src={closeIcon}
          alt="닫기"
          onClick={() => {
            onClose();
            setCategory('');
          }}
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
              onClick={() => setCategory(value)}
            />
          ))}
        </Ul>
      </CenterDiv>
    </Div>
  );
});

export default Category;
