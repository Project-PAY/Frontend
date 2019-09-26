import * as React from 'react';
import styled from 'styled-components';
import {$MAIN, $LINK} from '../../../styles/variables.types';
import TitleComp from '../TitleComp';
import blogIcon from '../../assets/icons/icon-blog.png';
import githubIcon from '../../assets/icons/icon-github.png';
import {fontStyleMixin} from '../../../styles/mixins.styles';

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

const A = styled.a<{
  width: number;
  height?: number;
}>`
  width: 50%;
  height: 94px;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  text-decoration: none;

  img {
    padding: 24px 0 0 4px;
    width: ${({width}) => width}px;
    ${({height}) => ({
      height: `${height}px`
    })}
  }

  span {
    display: block;
    ${fontStyleMixin({
      color: $LINK,
      family: 'nanumsquare',
      size: 14
    })};
  }
`;

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  height: 52px;
  text-align: center;
  bottom: 0;

  span {
    ${fontStyleMixin({
      color: $LINK,
      size: 8,
      family: 'nanumsquare'
    })};

    &.copyright {
      display: block;
      margin-bottom: 6px;
    }

    &.version {
      padding: 4px 8px;
      background-color: #e5e5e5;
      border-radius: 10px;
    }
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
      <A
        href="https://pewww.tistory.com"
        target="_blank"
        width={26}
      >
        <img
          src={blogIcon}
          alt="블로그 이동"
        />
        <span>블로그</span>
      </A>
      <A
        href="https://github.com/Project-PAY/Frontend"
        target="_blank"
        width={14}
        height={25}
      >
        <img
          src={githubIcon}
          alt="깃허브 이동"
        />
        <span>깃허브</span>
      </A>
      <Footer>
        <span className="copyright">
          Copyright PAY-How much you spent. All Rights Reserved.
        </span>
        <span className="version">
          version 1.0.0
        </span>
      </Footer>
    </Form>
  </div>
));

export default Sidebar;
