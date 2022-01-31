import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
  };

  return (
    <>
      <h2>{title}</h2>
      <button type='btn' onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
