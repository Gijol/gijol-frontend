import styled from 'styled-components';

const RecommendBoxContainer = styled.div`
  width: 432px;
  background-color: ${(props) => props.color};
  display: block;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 10px 19px gray;
`;
interface IProps {
  name: string;
}
const RecommendBox = function RecommendBox({ name }: IProps): JSX.Element {
  return <RecommendBoxContainer color="#c2c2c2">{name}</RecommendBoxContainer>;
};

export default RecommendBox;
