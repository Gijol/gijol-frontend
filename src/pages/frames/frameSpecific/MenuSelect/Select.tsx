import { SelectElement } from './styles';

interface Props {
  color: string;
  value: number;
  name: string;
  getCourseValue: (num: number) => void;
}

const Select = function Select({
  color,
  value,
  name,
  getCourseValue,
}: Props): JSX.Element {
  const handleClick = () => {
    getCourseValue(value);
  };
  return (
    <SelectElement color={color}>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        aria-hidden="true"
        // onKeyDown={handleClick}
      >
        {name}
      </div>
    </SelectElement>
  );
};

export default Select;
