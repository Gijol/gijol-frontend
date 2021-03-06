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
        style={{ userSelect: 'none', cursor: 'pointer' }}
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
        {drawerNum === 1 ? (
          <div
            style={{
              whiteSpace: 'pre-line',
              width: '180px',
              fontSize: '18px',
              userSelect: 'none',
            }}
          >
            <a
              href="https://zeus.gist.ac.kr/sys/main/login.do"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#1da447',
              }}
              tabIndex={-1}
            >
              zeus.gist.ac.kr
            </a>
            에 접속합니다
          </div>
        ) : null}
        {drawerNum === 2 ? (
          <div
            style={{
              whiteSpace: 'pre-line',
              width: '180px',
              fontSize: '18px',
              userSelect: 'none',
            }}
          >
            성적 &gt; 개인성적조회 &gt; Report card&#40;KOR&#41; 버튼을 눌러
            수강목록을 확인합니다
          </div>
        ) : null}
        {drawerNum === 3 ? (
          <div
            style={{
              whiteSpace: 'pre-line',
              width: '180px',
              fontSize: '18px',
              userSelect: 'none',
            }}
          >
            초록색 버튼을 눌러 엑셀 파일로 저장합니다
          </div>
        ) : null}
        {drawerNum === 4 ? (
          <div
            style={{
              whiteSpace: 'pre-line',
              width: '180px',
              fontSize: '18px',
              userSelect: 'none',
            }}
          >
            저장한 엑셀 파일을 업로드 합니다
          </div>
        ) : null}
      </div>
    </DrawerElement>
  );
};

export default Drawer;
