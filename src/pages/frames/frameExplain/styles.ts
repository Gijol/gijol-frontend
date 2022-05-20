import styled from 'styled-components';

const Explanation = styled.section`
  max-width: ${(props) => props.theme.basicWidth};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ExplanationHeaderContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
`;

const ExplanationHeader = styled.h2`
  font-weight: 600;
  font-style: normal;
  color: ${(props) => props.theme.color.main};
  font-size: 48px;
  letter-spacing: 0px;
  line-height: 1.2;
  margin-left: auto;
  margin-right: auto;
`;

const DrawerContainer = styled.div`
  padding: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5em;
`;

export {
  Explanation,
  ExplanationHeader,
  ExplanationHeaderContainer,
  DrawerContainer,
};
