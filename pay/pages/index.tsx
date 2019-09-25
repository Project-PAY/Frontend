import * as React from 'react';
import OGMetaHead from '../src/components/common/OGMetaHead';
import styled from 'styled-components';
import {$MAIN, $WHTIE} from '../styles/variables.types';
import sidebar from '../src/assets/icons/icon-sidebar.png';
import plus from '../src/assets/icons/icon-plus.png';
import {opacityMixin, fontStyleMixin} from '../styles/mixins.styles';
import withCommaNotation from '../src/lib/withCommaNotation';
import Bar from '../src/components/Bar';
import menus from '../src/components/Info/menus';
import Info from '../src/components/Info';
import {Link} from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';

const Div = styled.div`
  height: 100%;
`;

const Header = styled.header`
  position: relative;
  height: 240px;
  background-color: ${$MAIN};
  padding-left: 30px;
`;

const Ul = styled.ul`
  height: calc(100% - 240px);
  background-color: ${$WHTIE};
`;

const SidebarImg = styled.img`
  width: 26px;
  padding-top: 30px;
  cursor: pointer;
`;

const PlusImg = styled.img`
  position: absolute;
  width: 78px;
  bottom: -24px;
  right: 12px;
  cursor: pointer;
`;

const Span = styled.span`
  display: block;
  letter-spacing: .5px;
  padding-top: 95px;
  ${opacityMixin(0.5)};
  ${fontStyleMixin({
    family: 'Gotham-Bold',
    size: 20,
    color: $WHTIE
  })};
`;

const H1 = styled.h1`
  letter-spacing: -1px;
  padding-top: 8px;
  ${fontStyleMixin({
    family: 'nanumsquare',
    size: 40,
    color: $WHTIE,
    weight: '800'
  })};
`;

const BarSpace = styled.div`
  position: absolute;
  bottom: -5px;
`;

const BAR_HEIGHTS = [140, 76, 108, 123, 33, 169, 103];

const TEST_DATA = {
  current_money: '3247591',
  current_figure: '95',
  left_day: '20',
  today_expenditure: '250000',
  this_month_expenditure: '827943',
  last_month_expenditure: '2147300'
};

// @TODO: loginRequired hoc 적용
const Main = () => {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Div>
      <OGMetaHead title="메인페이지"/>
      <Sidebar
        isOpened={isOpened}
        closeSidebar={() => setIsOpened(false)}
      />
      <Header>
        <BarSpace>
          {BAR_HEIGHTS.map(height => (
            <Bar height={height}/>
          ))}
        </BarSpace>
        <SidebarImg
          src={sidebar}
          alt="사이드바 열기"
          onClick={() => setIsOpened(true)}
        />
        <Span>Total</Span>
        <H1>₩ {withCommaNotation('3247591')}</H1>
        <Link to="/register">
          <PlusImg
            src={plus}
            alt="수입/지출 추가"
          />
        </Link>
      </Header>
      <Ul>
        {menus(TEST_DATA).map(data => (
          <Info {...data}/>
        ))}
      </Ul>
    </Div>
  );
};

export default Main;
