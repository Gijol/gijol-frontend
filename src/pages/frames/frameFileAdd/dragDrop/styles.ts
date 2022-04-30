import styled from 'styled-components';

const DragDropBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
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
`;

export default DragDropBox;
