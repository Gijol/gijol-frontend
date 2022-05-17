import styled, { keyframes } from 'styled-components';

const DrawerContainer = styled.div`
  min-width: 200px;
`;

const toggleOn = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 200px;
  }
`;

const toggleOff = keyframes`
  0% {
    height: 200px;
  }

  100% {
    height: 0px;
  }
`;

const DrawerElement = styled.div`
  width: 100%;
  transition-duration: 2s;

  > .drawer-body-container-on {
    /* background-color: #c6ffd7; */
    /* width: 100%; */
    border-left: 3px solid ${(props) => props.theme.color.sub};
    /* margin-top: 10px; */
    margin-bottom: 10px;
    padding-left: 20px;
    overflow: hidden;
    height: 200px;
    animation: ${toggleOn} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  > .drawer-body-container-off {
    /* width: 100%; */
    border-left: 3px solid ${(props) => props.theme.color.sub};
    height: 0px;
    overflow: hidden;
    animation: ${toggleOff} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  > .drawer-header-on {
    border-left: 3px solid ${(props) => props.theme.color.sub};
    color: ${(props) => props.theme.color.sub};
  }
  > .drawer-header-off {
    border-left: 3px solid ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.main};
  }
  > .drawer-header-default {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 14px;
    margin-top: 5px;
    font-size: 25px;
    font-weight: 700;
  }
`;

const DrawerHeaderContainer = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 14px;
  margin-top: 5px;
  font-size: 25px;
  font-weight: 700;
`;

export { DrawerHeaderContainer, DrawerElement, DrawerContainer };
