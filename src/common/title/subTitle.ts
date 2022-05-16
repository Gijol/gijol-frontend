import styled from 'styled-components';

const SubTitle = styled.h1`
  margin-bottom: 12px;
  margin-top: 0px;
  font-size: 28px;
  letter-spacing: 0px;
  font-weight: 400;
  color: ${(props) => props.theme.color.main};
  line-height: 1.2;
`;

export default SubTitle;
