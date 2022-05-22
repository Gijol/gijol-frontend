import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const UploadButton = styled.button`
  width: 130px;
  margin-left: 10px;
  height: 50px;
  border-radius: 10px;
  border: 0px;
  background-color: ${(props) => props.theme.color.sub};
  color: white;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.sub};
    background-color: white;
    transition: 0.3s;
    transform: translateY(-2px);
    box-shadow: 0 0 20px -6px gray;
  }
`;
const QuestionContainer = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const Help = styled.div`
  position: absolute;
  box-sizing: border-box;
  overflow-y: scroll;
  max-height: 150px;
  font-size: 12px;
  z-index: 999;
  margin-left: -100px;
  background: white;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.sub};
  box-shadow: 0 0 1px 1px ${(props) => props.theme.color.sub};
`;

export { Help, Image, QuestionContainer, UploadButton, Container };
