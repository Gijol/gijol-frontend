import { MobileHeader } from './styles';

const MobileHeaderContainer = function MovileHeader(): JSX.Element {
  return (
    <MobileHeader>
      <div className="logo">Gijol</div>
      <div className="qna-btn">
        <a
          href="https://choieungi-project.notion.site/Q-A-9e325eabef4e479a8f47e95eb90bb344"
          rel="noreferrer"
          target="_blank"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          QnA
        </a>
      </div>
    </MobileHeader>
  );
};
export default MobileHeaderContainer;
