import styled from 'styled-components';

const MainTitle = styled.div`
  margin: 3em auto 1em auto;
  font-size: 36px;
  letter-spacing: 0px;
  font-weight: 500;
  /* font-weight: 400; */
  color: ${(props) => props.theme.color.main};
  line-height: 1.2;
  user-select: none;
`;

export default MainTitle;
