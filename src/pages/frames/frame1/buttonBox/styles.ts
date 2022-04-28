import styled from 'styled-components';

const StandardButton = styled.button`
  display: inline-flex;
  margin: 0px 5px;
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
    transition: 0.5s;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export { StandardButton, ButtonsContainer };
