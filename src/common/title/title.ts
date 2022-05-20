import styled from 'styled-components';

const MainTitle = styled.h1`
  margin: 2.5em auto 0.5em auto;
  font-size: 36px;
  letter-spacing: 0px;
  font-weight: 500;
  /* font-weight: 400; */
  color: ${(props) => props.theme.color.main};
  line-height: 1.2;
`;

export default MainTitle;
