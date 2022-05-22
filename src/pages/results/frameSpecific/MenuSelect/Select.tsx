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
    <div
      role="button"
      tabIndex={-1}
      onClick={handleClick}
      aria-hidden="true"
      style={{ outline: 'null' }}
    >
      {value === 1 ? (
        <SelectElement color={color} tabIndex={-1}>
          언어와 기초
        </SelectElement>
      ) : null}
      {value === 2 ? (
        <SelectElement color={color} tabIndex={-1}>
          기초과학
        </SelectElement>
      ) : null}
      {value === 3 ? (
        <SelectElement color={color} tabIndex={-1}>
          인문사회
        </SelectElement>
      ) : null}
      {value === 4 ? (
        <SelectElement color={color} tabIndex={-1}>
          전공
        </SelectElement>
      ) : null}
      {value === 5 ? (
        <SelectElement color={color} tabIndex={-1}>
          <span>
            기타필수<span>ㆍ</span>연구
          </span>
        </SelectElement>
      ) : null}
      {value === 6 ? (
        <SelectElement color={color} tabIndex={-1}>
          자유학점
        </SelectElement>
      ) : null}
    </div>
  );
};

export default Select;
