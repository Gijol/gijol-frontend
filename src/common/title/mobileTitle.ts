import styled from 'styled-components';

const MobileTitle = styled.h1`
  margin: 16px auto;
  font-size: 28px;
  letter-spacing: 0px;
  font-weight: 400;
  color: ${(props) => props.theme.color.main};
  line-height: 1.2;
`;

export default MobileTitle;
