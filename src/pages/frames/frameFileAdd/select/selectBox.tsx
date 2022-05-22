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
    <SelectBox onChange={handleChange} tabIndex={-1}>
      <option disabled hidden value="" selected tabIndex={-1}>
        전공을 선택하세요
      </option>
      {options.map(({ name, value, key }: Major) => (
        <OptionInner value={value} key={key} tabIndex={-1}>
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
