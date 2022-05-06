import { useState } from 'react';
import Title from 'common/title/title';
import callGraduateApi from './pushBtnApi';
import DragDrop from './dragDrop/dragDrop';
import MajorButtonContainer from './buttonContainer/buttonContainer';
import { FileContainer, FileAdd } from './styles';

const FileAddFrame = function FileAddFrame(): JSX.Element {
  const [majorValue, setMajorValue] = useState<string>();
  const [courseFile, setCourseFile] = useState<File | null>(null);

  const pushBtn = () => {
    callGraduateApi(courseFile, majorValue);
  };

  const setMajorValueBy = (major: string) => {
    console.log(major);
    if (major !== null) {
      console.log(major);
      setMajorValue(major);
    }
  };
  const setCourseFileBy = (file: File) => {
    if (file === null) {
      return;
    }
    setCourseFile(file);
  };

  return (
    <FileContainer>
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
