import styled from 'styled-components';

const Explanation = styled.section`
  max-width: ${(props) => props.theme.basicWidth};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ExplanationHeaderContainer = styled.div`
  width: 100%;
  display: inline-flex;
  margin-top: 5em;
  margin-bottom: 1em;
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
  padding-right: 3.5em;
  padding-left: 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Explanation,
  ExplanationHeader,
  ExplanationHeaderContainer,
  DrawerContainer,
};
