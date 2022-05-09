import { useState } from 'react';

import Title from 'common/title/title';
import callGraduateApi from './pushBtnApi';
import DragDrop from './dragDrop/dragDrop';
import MajorButtonContainer from './buttonContainer/buttonContainer';
import { LoadingModal, FileContainer, FileAdd } from './styles';

const FileAddFrame = function FileAddFrame(): JSX.Element {
  const [majorValue, setMajorValue] = useState<string>();
  const [courseFile, setCourseFile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const pushBtn = () => {
    call();
  };
  async function call() {
    setLoading(true);
    await callGraduateApi(courseFile, majorValue);
    await setLoading(false);
    // setCourseFile(null);
  }

  const setMajorValueBy = (major: string) => {
    console.log(major);
    if (major !== null) {
      console.log(major);
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
