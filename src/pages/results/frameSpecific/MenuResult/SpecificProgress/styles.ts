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
  user-select: none;
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
  font-size: 22px;
  z-index: 1;
  user-select: none;
`;

const ExtraMessage = styled.span`
  font-size: 20px;
  text-align: center;
  user-select: none;
`;

export {
  SpecificBarAndLabel,
  SpecificLabelOfBar,
  SpecificCircleContainer,
  SpecificLabelOfCircle,
  ExtraMessage,
};
