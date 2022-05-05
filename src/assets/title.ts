import styled from 'styled-components';

const Title = styled.h1`
  margin: 20px auto;
  font-size: 48px;
  letter-spacing: 0px;
  font-weight: 400;
  color: ${(props) => props.theme.color.main};
  line-height: 1.2;
`;

export default Title;
