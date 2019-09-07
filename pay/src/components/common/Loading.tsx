import * as React from 'react';
import styled from 'styled-components';
import LoadingImg from '../../assets/icons/icon-loading.gif';

const Img = styled.img`
  display: block;
  margin: auto;
  padding: 20px 0;
`;

const InnerLoading = React.memo(({innerRef}: {
  innerRef: React.Ref<HTMLParagraphElement>
}) => (
  <p ref={innerRef}>
    <Img
      src={LoadingImg}
      alt="피드를 불러오는 중입니다."
    />
  </p>
));

const Loading = React.memo(
  React.forwardRef((props, ref: React.Ref<HTMLParagraphElement>) => (
    <InnerLoading
      innerRef={ref}
      {...props}
    />
  )
));

export default Loading;
