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
  &:hover {
    background-color: ${(props) => props.color};
    padding-left: 28px;
    color: white;
    width: 132px;
  }
  // div 태그는 focusable 하지 않아서 &:focus를 적용하지 못함
  // 적용하기 위해선 button을 이용해야함
`;

const NonSelect = styled.div`
  position: relative;
  width: 840px;
  height: 500px;
  border-radius: 0 20px 20px 0;
  box-shadow: -5px 0 10px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { SelectContainer, SelectElement, NonSelect };
