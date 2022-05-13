import React from 'react';
import { SelectContainer, Select } from './styles';

const MenuSelect = function MenuSelect(): JSX.Element {
  return (
    <SelectContainer>
      <Select color="#6BCB77">언어와 기초</Select>
      <Select color="#4D96FF">기초과학</Select>
      <Select color="#F0CA33">인문사회</Select>
      <Select color="#FF6B6B">전공</Select>
      <Select color="#9772FB">기타필수</Select>
      <Select color="#B0B8C1">기타</Select>
    </SelectContainer>
  );
};

export default MenuSelect;
