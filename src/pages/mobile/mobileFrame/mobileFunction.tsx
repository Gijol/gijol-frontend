import { InnerContainer, IntroduceConatiner } from './styles';

const MobileFunction = function MobileFunction(): JSX.Element {
  return (
    <IntroduceConatiner style={{ justifyContent: 'center' }}>
      <InnerContainer>
        <div>나의 수강 현황,</div>
      </InnerContainer>
      <InnerContainer>
        <div>나의 수강 현황,</div>
      </InnerContainer>
    </IntroduceConatiner>
  );
};

export default MobileFunction;
