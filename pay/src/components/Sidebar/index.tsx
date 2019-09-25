import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../../styles/variables.types';
import TitleComp from '../TitleComp';

const Cover = styled.div<{
  isOpened: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 8888;
  display: ${({isOpened}) => isOpened ? 'block' : 'none'}
`;

const Form = styled.div<{
  isOpened: boolean;
}>`
  position: absolute;
  width: 282px;
  height: 100%;
  z-index: 9999;
  background-color: #fafafa;
  box-shadow: ${({isOpened}) => isOpened
    ? '0 19px 36px 0 rgba(0, 0, 0, .28)'
    : '0'
  };
  left: ${({isOpened}) => isOpened ? '0' : '-282px'};
  transition: .4s;
`;

const Header = styled.header`
  height: 200px;
  background-color: ${$MAIN};

  div h1 {
    padding-top: 140px;
  }
`;

interface Props {
  isOpened: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<Props> = React.memo(({
  isOpened,
  closeSidebar
}) => (
  <div>
    <Cover
      isOpened={isOpened}
      onClick={closeSidebar}
    />
    <Form isOpened={isOpened}>
      <Header>
        <TitleComp/>
      </Header>
    </Form>
  </div>
));

export default Sidebar;
