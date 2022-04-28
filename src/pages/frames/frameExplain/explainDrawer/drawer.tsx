import React from 'react';
import { DrawerElement } from './styles';

interface IProps {
  drawerNum: number;
  pickNum: number;
  setNum: (e: React.MouseEvent<HTMLDivElement>, thisNum: number) => void;
}

const Drawer = function Drawer({
  drawerNum,
  pickNum,
  setNum,
}: IProps): JSX.Element {
  return (
    <DrawerElement>
      <div
        className={
          pickNum === drawerNum
            ? 'drawer-header-on drawer-header-default'
            : 'drawer-header-off drawer-header-default'
        }
        aria-hidden="true"
        onClick={(e) => setNum(e, drawerNum)}
      >
        Step {drawerNum}
      </div>
      <div
        className={
          pickNum === drawerNum
            ? 'drawer-body-container-on'
            : 'drawer-body-container-off'
        }
        onClick={(e) => setNum(e, drawerNum + 1)}
        aria-hidden="true"
      >
        <br />
        설명 어쩌고 저쩌고
      </div>
    </DrawerElement>
  );
};

export default Drawer;
