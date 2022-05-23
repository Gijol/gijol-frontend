import styled from 'styled-components';
import { InnerContainer, IntroduceConatiner } from '../styles';
import MobileFunctionOverall from './mobileFuntcionOverall';
import MobileFunctionRecommend from './mobileFunctionRecommend';

const BottomTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 3em;
`;
const MobileFunction = function MobileFunction(): JSX.Element {
  return (
    <IntroduceConatiner style={{ paddingTop: '1em' }}>
      <MobileFunctionOverall />
      <MobileFunctionRecommend />
      <BottomTitle>
        <span style={{ color: '#1daa47' }}>Gijol</span>에서 만나보세요
      </BottomTitle>
    </IntroduceConatiner>
  );
};

export default MobileFunction;
