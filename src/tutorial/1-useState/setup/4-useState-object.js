import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'hello there',
  });

  const changeMessage = () => {
    let message =
      person.message === 'hello there' ? 'hello world' : 'hello there';
    setPerson({ ...person, message });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
