import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../styles/variables.types';
import TitleComp from '../../src/components/common/TitleComp';
import LinkBtn from '../../src/components/common/LinkBtn';
import {useDispatch} from 'react-redux';
import anonRequired from '../../hocs/anonRequired';
import {fetchInfo} from '../../src/reducers/info/thunks';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const Setting = () => {
  const dispatch = useDispatch();

  // 임시
  const isProperForm = React.useCallback((form: any) => {
    return [true, {}]; // OR [false, 'Error Text']
  }, []);

  const onCompleteSetting = React.useCallback(() => {
    const [isProper, form] = isProperForm({});

    if (isProper) {
      // API 호출 및 action dispatch
      alert('Hello');
      console.dir(form);
    } else {
      alert(isProper);
    }
  }, []);

  React.useEffect(() => {
    dispatch(fetchInfo());
  });

  return (
    <Div>
      <TitleComp/>
      <LinkBtn
        text="설정하기"
        type="button"
        // onClick={} - call onCompleteSetting
      />
    </Div>
  );
};

export default anonRequired(Setting);
