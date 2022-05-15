import styled from 'styled-components';

const SpecificBarAndLabel = styled.div`
  position: relative;
  width: 236px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SpecificLabelOfBar = styled.div`
  font-size: 24px;
`;

const SpecificCircleContainer = styled.div`
  width: 252px;
  height: 252px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpecificLabelOfCircle = styled.div`
  position: absolute;
  font-size: 24px;
  z-index: 1;
`;

export {
  SpecificBarAndLabel,
  SpecificLabelOfBar,
  SpecificCircleContainer,
  SpecificLabelOfCircle,
};
