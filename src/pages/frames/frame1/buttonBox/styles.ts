import styled from 'styled-components';

const StandardButton = styled.button`
  display: inline-flex;
  margin: 0px 0.5em;
  cursor: pointer;
  padding: 26px 50px;
  align-items: center;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.color.sub};
  justify-content: center;
  height: 20px;
  font-size: 17px;

  &:hover {
    color: ${(props) => props.theme.color.sub};
    background-color: white;
    transition: 0.3s;
    transform: translateY(-2px);
    box-shadow: 0 0 20px -6px gray;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 8em;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export { StandardButton, ButtonsContainer };
