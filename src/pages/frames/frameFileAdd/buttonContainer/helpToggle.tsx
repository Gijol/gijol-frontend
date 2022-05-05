import { Help } from './style';

interface IProps {
  isOver: boolean;
}
const RenderHelp = function RenderHelp({ isOver }: IProps): JSX.Element {
  return (
    <div>
      {isOver ? (
        <Help>만약 기초교육학부 학생이시면 희망 전공를 골라주세요</Help>
      ) : (
        <div />
      )}
    </div>
  );
};

export default RenderHelp;
