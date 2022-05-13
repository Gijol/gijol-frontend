import styled from 'styled-components';

const SelectContainer = styled.div`
  width: 100%;
  height: 376px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SelectElement = styled.div`
  position: relative;
  width: 140px;
  height: 48px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  transition: 0.15s linear;
  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.color};
    padding-left: 28px;
    color: white;
    width: 132px;
  }
`;

export { SelectContainer, SelectElement };
