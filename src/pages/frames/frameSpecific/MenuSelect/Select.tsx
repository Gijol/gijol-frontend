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
    <div role="button" tabIndex={0} onClick={handleClick} aria-hidden="true">
      <SelectElement color={color}>{name}</SelectElement>
    </div>
  );
};

export default Select;
