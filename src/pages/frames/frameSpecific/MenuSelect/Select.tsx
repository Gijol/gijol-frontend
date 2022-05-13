import React from 'react';
import { SelectElement } from './styles';

interface Props {
  color: string;
  value: number;
  name: string;
  // onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Select = function Select({ color, value, name }: Props): JSX.Element {
  return <SelectElement color={color}>{name}</SelectElement>;
};

export default Select;
