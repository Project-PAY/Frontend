import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../styles/variables.types';
import TitleComp from '../../src/components/common/TitleComp';
import {backgroundImgMixin} from '../../styles/mixins.styles';
import backgroundImg from '../../src/assets/images/img-setting-background.png';
import LinkBtn from '../../src/components/common/LinkBtn';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const BackgroundImg = styled.div`
  height: calc(100% - 186px);
  margin-top: -30px;
  ${backgroundImgMixin({
    img: backgroundImg,
    position: '65%'
  })};
`;

const Welcome = () => (
  <Div>
    <TitleComp/>
    <BackgroundImg/>
    <LinkBtn
      text="환영합니다!"
      type="link"
      to="/setting"
    />
  </Div>
);

export default Welcome;
