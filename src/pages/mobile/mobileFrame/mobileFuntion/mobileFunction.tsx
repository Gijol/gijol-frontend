import styled from 'styled-components';
import { InnerContainer, IntroduceConatiner } from '../styles';
import MobileFunctionOverall from './mobileFuntcionOverall';
import MobileFunctionRecommend from './mobileFunctionRecommend';

const BottomTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  /* margin-top: -10; */
  margin-bottom: 3em;
`;
const MobileFunction = function MobileFunction(): JSX.Element {
  return (
    <IntroduceConatiner style={{ paddingTop: '3em' }}>
      <MobileFunctionOverall />
      <MobileFunctionRecommend />
      <BottomTitle>간편히 Gijol에서 만나보세요</BottomTitle>
    </IntroduceConatiner>
  );
};

export default MobileFunction;
