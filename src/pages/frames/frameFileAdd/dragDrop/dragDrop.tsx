import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const DragDropBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  > .dragdrop-default {
    width: 300px;
    height: 30%;
    background-color: #68de8c;
    padding: 0.5rem;
    border-radius: 5px;
  }
  > .not-dragging {
    border: 3px dotted ${(props) => props.theme.color.sub};
  }
  > .dragging {
    border: 3px solid ${(props) => props.theme.color.sub};
  }
`;

const DragDrop = function DragDrop(): JSX.Element {
  const Id = 'fileUpload';
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileId = useRef<number>(0);

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

    setIsDragging(false);
  }, []);

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
          style={{ display: 'none' }}
          multiple={false}
        />

        <div>파일을 끌어다 추가하세요</div>
      </label>
    </DragDropBox>
  );
};

export default DragDrop;
