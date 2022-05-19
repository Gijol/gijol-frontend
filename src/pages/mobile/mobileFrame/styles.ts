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
  width: 100%;
  height: 12em;
  > .header {
    text-align: center;
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 0.2em;
    margin-top: 0.5em;
  }
  > .sub-header {
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export const MobileImage = styled.div`
  width: 100%;
  /* padding: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  > .inner-img {
    width: 95%;
  }
`;
