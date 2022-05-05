import styled from 'styled-components';
import MajorOptionArray from './majorOptions';

import Major from './major';

export const SelectBox = styled.select`
  border-radius: 10px;
  width: 200px;
  padding-left: 10px;
  font-size: 14px;
  border: none;
`;

export const OptionInner = styled.option`
  font-size: 20px;
  font-weight: 600;
`;

const SelectContainer = function SelectContainer(props: {
  options: Major[];
}): JSX.Element {
  const handleChange = (e: { target: { value: string } }) => {
    console.log(e.target.value);
  };
  const { options: majorOptions } = props;
  return (
    <SelectBox onChange={handleChange}>
      {majorOptions.map(({ name, value, key }: Major) => (
        <OptionInner value={value} key={key}>
          {name}
        </OptionInner>
      ))}
    </SelectBox>
  );
};

const SelectMajor = function SelectMajor(): JSX.Element {
  return <SelectContainer options={MajorOptionArray} />;
};

export default SelectMajor;
