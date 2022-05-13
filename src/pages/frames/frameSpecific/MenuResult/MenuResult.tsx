import React from 'react';
import { SpecificResultContainer } from './styles';

interface Props {
  course: string;
}

const MenuResult = function MenuResult({ course }: Props): JSX.Element {
  return <SpecificResultContainer>{course}</SpecificResultContainer>;
};

export default MenuResult;
