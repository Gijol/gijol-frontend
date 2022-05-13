import React, { useState } from 'react';
import { SelectContainer } from './styles';
import Select from './Select';

const MenuSelect = function MenuSelect(): JSX.Element {
  return (
    <SelectContainer>
      <Select color="#6BCB77" value={1} name="언어와 기초" />
      <Select color="#4D96FF" value={2} name="기초과학" />
      <Select color="#F0CA33" value={3} name="인문사회" />
      <Select color="#FF6B6B" value={4} name="전공" />
      <Select color="#9772FB" value={5} name="기타필수" />
      <Select color="#B0B8C1" value={6} name="기타" />
    </SelectContainer>
  );
};

export default MenuSelect;
