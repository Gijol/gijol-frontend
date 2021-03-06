import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DragDropBox, InputText } from './styles';

interface IProps {
  setCourseFileBy: (file: File) => void;
}
const DragDrop = function DragDrop({ setCourseFileBy }: IProps): JSX.Element {
  const Id = 'fileUpload';
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const inputElement = document.getElementById(Id);

  const dragRef = useRef<HTMLLabelElement | null>(null);

  const handleDragIn = useCallback((event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDragOut = useCallback((event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOver = useCallback((event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer!.files) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    onChangeFile(event);
    setIsDragging(false);
  }, []);

  // 컴포넌트가 마운트 될 때 위의 함수들에 event listener를 달아줌
  const initDragEvent = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  // 컴포넌트가 언마운트될 때 함수들에 event listener 제거
  const endDragEvent = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvent();
    return () => {
      endDragEvent();
    };
  }, [initDragEvent, endDragEvent]);

  const onChangeFile = useCallback(
    (event: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFile: File;

      if (event.type === 'drop') {
        selectFile = event.dataTransfer.files.item(0);
      } else {
        selectFile = event.target.files.item(0);
      }
      setCourseFileBy(selectFile);
      setFile(selectFile);
    },
    [file],
  );

  const handleFilterFile = useCallback(
    (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      setFile(null);
    },
    [file],
  );

  return (
    <DragDropBox>
      <label
        className={
          isDragging
            ? 'dragdrop-default dragging'
            : 'dragdrop-default not-dragging'
        }
        // 드래그 중일때와 아닐때의 클래스 이름을 다르게 주어 스타일 차이

        htmlFor={Id}
        ref={dragRef}
      >
        <input
          type="file"
          id={Id}
          accept=".xls, .xlsx"
          style={{ display: 'none' }}
          multiple={false}
          onChange={(e) => {
            console.log('updated');
            if (e.target.files !== null) {
              setCourseFileBy(e.target.files[0]);
              setFile(e.target.files[0]);
              e.target.value = '';
            }
          }}
        />

        <InputText>
          <div className="drag-drop">
            {file !== null ? (
              <div className="file-exist-container">
                <div>{file?.name}</div>
                <div
                  aria-hidden="true"
                  role="button"
                  className="DragDrop-Files-Filter"
                  onClick={(e) => {
                    handleFilterFile(e);
                  }}
                >
                  삭제
                </div>
              </div>
            ) : (
              <div style={{ cursor: 'pointer' }}>
                졸업 요건을 확인할 파일을 끌어다 업로드 해주세요.
              </div>
            )}
          </div>
        </InputText>
      </label>
    </DragDropBox>
  );
};

export default DragDrop;
