import { SelectElement } from './styles';

interface Props {
  color: string;
  value: number;
  getCourseValue: (num: number) => void;
}

const Select = function Select({
  color,
  value,
  getCourseValue,
}: Props): JSX.Element {
  const handleClick = () => {
    getCourseValue(value);
  };
  return (
    <div role="button" tabIndex={0} onClick={handleClick} aria-hidden="true">
      {value === 1 ? (
        <SelectElement color={color}>언어와 기초</SelectElement>
      ) : null}
      {value === 2 ? (
        <SelectElement color={color}>기초과학</SelectElement>
      ) : null}
      {value === 3 ? (
        <SelectElement color={color}>인문사회</SelectElement>
      ) : null}
      {value === 4 ? <SelectElement color={color}>전공</SelectElement> : null}
      {value === 5 ? (
        <SelectElement color={color}>
          <span>
            기타필수<span>ㆍ</span>연구
          </span>
        </SelectElement>
      ) : null}
      {value === 6 ? <SelectElement color={color}>기타</SelectElement> : null}
    </div>
  );
};

export default Select;
