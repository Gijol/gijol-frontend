import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 1em;
  padding-right: 0.5em;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1.5em;
  height: 150px;
  background-color: ${(props) => props.theme.color.sub};
  z-index: 10;

  > .exit {
    position: absolute;
    right: 80px;
    top: 5px;
  }
`;

export const GraphDesc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > .text-graph-container {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.1em;
    text-align: center;
    font-weight: 400;
  }
`;
