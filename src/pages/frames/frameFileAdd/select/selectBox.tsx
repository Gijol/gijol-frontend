import styled from 'styled-components';
import MajorOptionArray from './majorOptions';
import { SelectBox, OptionInner } from './styles';
import Major from './major';

interface IProps {
  setMajorValueBy: (e: string) => void;
  options: Major[];
}
const SelectContainer = function SelectContainer({
  options,
  setMajorValueBy,
}: IProps): JSX.Element {
  const handleChange = (e: any) => {
    setMajorValueBy(e.target.value);
  };

  return (
    <SelectBox onChange={handleChange}>
      {options.map(({ name, value, key }: Major) => (
        <OptionInner value={value} key={key}>
          {name}
        </OptionInner>
      ))}
    </SelectBox>
  );
};

interface SIProps {
  setMajorValueBy: (e: string) => void;
}
const SelectMajor = function SelectMajor({
  setMajorValueBy,
}: SIProps): JSX.Element {
  return (
    <SelectContainer
      setMajorValueBy={setMajorValueBy}
      options={MajorOptionArray}
    />
  );
};

export default SelectMajor;
