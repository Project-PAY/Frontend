import * as React from 'react';
import styled from 'styled-components';
import {$MAIN} from '../../styles/variables.types';
import TitleComp from '../../src/components/common/TitleComp';
import LinkBtn from '../../src/components/common/LinkBtn';
import anonRequired from '../../hocs/anonRequired';
import useAccessNeededFunc from '../../hooks/useAccessNeededFunc';
import InfoApi from '../../src/apis/InfoApi';
import Input from '../../src/components/input';

const Div = styled.div`
  height: 100%;
  background-color: ${$MAIN};
`;

const Setting = () => {
  const infoApi: InfoApi = useAccessNeededFunc(access => new InfoApi(access));

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

  return (
    <Div>
      <TitleComp/>
      <div>
        <Input
          value=""
        />
      </div>
      <LinkBtn
        text="설정하기"
        type="button"
        // onClick={} - call onCompleteSetting
      />
    </Div>
  );
};

export default anonRequired(Setting);
