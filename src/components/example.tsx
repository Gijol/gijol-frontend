import { useState } from 'react';
// import React from 'react';

const Example = function Example(): JSX.Element {
  // var pressNumber: number;

  const [pressNumber, pressNumberState] = useState(0);

  const add = () => {
    const tempNum = pressNumber + 1;
    pressNumberState(tempNum);
  };
  const subtract = () => {
    const tempNum = pressNumber - 1;
    pressNumberState(tempNum);
  };

  return (
    <>
      <h1>Welcome to Gijol</h1>
      <button type="button" onClick={add}>
        add
      </button>
      <button type="button" onClick={subtract}>
        subtract
      </button>
      <br />
      <span>{pressNumber}</span>
    </>
  );
};

export default Example;
