import React, { useState } from 'react';

const UseStateBasics = () => {
  // const [value, handler] = useState('hello world');
  let [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') setText('hello world');
    else setText('random title');
  };

  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
