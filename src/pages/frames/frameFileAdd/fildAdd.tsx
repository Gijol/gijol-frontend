import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'common/title/title';

import { ExplanationHeaderContainer } from '../frameExplain/styles';
import DragDrop from './dragDrop/dragDrop';
import MajorButtonContainer from './buttonContainer/buttonContainer';

import { FileContainer, FileAdd } from './styles';

const FileAddFrame = function FileAddFrame(): JSX.Element {
  const [majorValue, setMajorValue] = useState<string>();
  const [courseFile, setCourseFile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const pushBtn = () => {
    call();
  };

  async function call() {
    if (courseFile === null) {
      alert('성적표 파일을 업로드 해주세요');
      return;
    }
    if (majorValue === null || majorValue === undefined) {
      alert('학과를 선택해주세요');
      return;
    }

    navigate('/gijol-frontend/result', {
      state: {
        apiFile: courseFile,
        apiCode: majorValue,
      },
    });
  }

  const setMajorValueBy = (major: string) => {
    console.log(major);
    if (major !== null) {
      setMajorValue(major);
    }
  };
  const setCourseFileBy = (file: File | null) => {
    if (file === null) {
      return;
    }
    setCourseFile(file);
  };

  return (
    <FileContainer>
      <ExplanationHeaderContainer>
        <Title>아래 칸에 엑셀 파일을 끌어다 놓아주세요</Title>
      </ExplanationHeaderContainer>
      <FileAdd>
        <DragDrop setCourseFileBy={setCourseFileBy} />
      </FileAdd>
      <MajorButtonContainer
        pushBtn={pushBtn}
        setMajorValueBy={setMajorValueBy}
      />
    </FileContainer>
  );
};

export default FileAddFrame;
