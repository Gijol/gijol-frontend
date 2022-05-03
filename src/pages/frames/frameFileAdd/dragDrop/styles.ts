import styled from 'styled-components';

const DragDropBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .dragdrop-default {
    width: 300px;
    height: 30%;
    background-color: #68de8c;
    padding: 0.5rem;
    border-radius: 5px;
  }
  > .not-dragging {
    border: 3px dotted ${(props) => props.theme.color.sub};
  }
  > .dragging {
    border: 3px solid ${(props) => props.theme.color.sub};
  }
  > .drag-drop {
    margin-top: 20px;
    /* display: flex; */
    font-size: 1.25rem;
    font-weight: 600;

    > .file-exist-container {
      display: flex;

      > .DragDrop-Files-Filter {
        padding-left: 20px;
        margin-top: auto;
        margin-bottom: auto;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        color: red;
      }
    }
  }
`;

const InputText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { DragDropBox, InputText };
