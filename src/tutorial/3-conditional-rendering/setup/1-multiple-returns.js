import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        setLoading(false);
        setError(false);
        setUser(user);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>ERROR</h2>;
  }
  return (
    <ul className='users'>
      <li className='user'>
        {console.log(user)}
        <img src={user.avatar_url} alt='' />
        <h3>{user.name}</h3> <br />
        <a
          href='https://github.com/QuincyLarson'
          target='_blank'
          rel='noopener noreferrer'>
          Profile
        </a>
      </li>
    </ul>
  );
};

export default MultipleReturns;
