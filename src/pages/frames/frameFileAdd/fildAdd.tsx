import { useState } from 'react';
import { useNavigate } from 'react-router';
import Title from 'common/title/title';
import Result from 'utils/api/result';

import callGraduateApi from './pushBtnApi';
import DragDrop from './dragDrop/dragDrop';
import MajorButtonContainer from './buttonContainer/buttonContainer';

import { LoadingModal, FileContainer, FileAdd } from './styles';

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
    setLoading(true);

    const result = await callGraduateApi(courseFile, majorValue);
    await setLoading(false);

    navigate('/gijol-frontend/result', {
      state: result,
      replace: false,
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
      {isLoading ? (
        <LoadingModal>
          <div className="loading-modal-container">
            <div style={{ textAlign: 'center' }}>
              Gijol이 일하는 중! <br /> 잠시만 기다려주세요
            </div>
          </div>
        </LoadingModal>
      ) : null}

      <Title>아래 칸에 엑셀 파일을 끌어다 놓아주세요</Title>
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
