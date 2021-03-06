import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'common/title/title';
import ReactGA from 'react-ga';

import { ExplanationHeaderContainer } from '../frameExplain/styles';
import DragDrop from './dragDrop/dragDrop';
import MajorButtonContainer from './buttonContainer/buttonContainer';

import { FileContainer, FileAdd } from './styles';
import '../../results/frameOverall/styles.css';

const FileAddFrame = function FileAddFrame(): JSX.Element {
  const [majorValue, setMajorValue] = useState<string>();
  const [courseFile, setCourseFile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const pushBtn = () => {
    ReactGA.event({
      category: 'Button',
      action: "go to other's profile",
      label: 'profile',
    });
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

    navigate('/result', {
      state: {
        apiFile: courseFile,
        apiCode: majorValue,
      },
    });
  }

  const setMajorValueBy = (major: string) => {
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
      <div className="title">
        <Title>아래 칸에 엑셀 파일을 끌어다 놓아주세요</Title>
      </div>
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
