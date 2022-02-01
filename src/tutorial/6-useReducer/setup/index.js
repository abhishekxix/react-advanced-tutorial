import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form className='form' action='' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      ))}
    </>
  );
};

export default Index;
