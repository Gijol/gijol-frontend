import styled from 'styled-components';

export const IntroduceConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  margin-right: 1em;
  height: 100%;

  > .mobile-title {
    padding-top: 1.7em;
    line-height: 1.3em;
    font-size: 40px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: ${(props) => props.theme.color.main};

    > .color {
      letter-spacing: 0;
      color: ${(props) => props.theme.color.sub};
    }
  }

  > .mobile-sub-title {
    margin-top: 2em;
    line-height: 1.3em;
    letter-spacing: 0.05em;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
`;

export const InnerContainer = styled.div`
  margin-bottom: 1em;
  border-radius: 20px;
  border: 1px solid #e6e6e6;
  background-color: #e6e6e6;
  box-shadow: 0px 2.3px 1px #c8c8c8;
  width: 100%;
  /* height: 300px; */
  > .header {
    text-align: center;
    font-size: 1.3em;
    font-weight: 500;
    margin-bottom: 0.2em;
    margin-top: 0.5em;
  }
`;

export const MobileImage = styled.div`
  width: 100%;
  /* padding: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  > .inner-img {
    border-radius: 20px;
    width: 95%;
  }
`;
