import { useState } from 'react';
import MobileHeaderContainer from 'common/header/mobileHeader';
import MobileSwiper from './mobileSwiper';
import { ModalContainer } from './styles';

const MobileMain = function MobileMain(): JSX.Element {
  const [isPressed, setPressed] = useState<boolean>(false);
  const press = () => {
    setPressed(true);
  };

  return (
    <>
      <MobileHeaderContainer />
      <MobileSwiper />
      <div>
        {!isPressed ? (
          <ModalContainer
            onClick={() => {
              press();
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              Gijol, <br /> 웹으로 만나보세요!
            </div>
            <div className="exit">x</div>
          </ModalContainer>
        ) : null}
      </div>
    </>
  );
};

export default MobileMain;
