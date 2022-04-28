import { RightNav } from './styles';

const Navi = function Navi(): JSX.Element {
  return (
    <>
      <RightNav to="/qna">
        <span>Q&A</span>
      </RightNav>
      <RightNav to="/aboutus">
        <span>About Us</span>
      </RightNav>
    </>
  );
};

export default Navi;
