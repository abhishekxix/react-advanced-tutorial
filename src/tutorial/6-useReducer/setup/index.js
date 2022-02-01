import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalShown: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalShown: true,
      modalContent: 'Please enter value.',
    };
  }

  throw new Error('No matching action type.');
};

const defaultState = {
  people: [],
  isModalShown: false,
  modalContent: 'hello world',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      setName('');
      dispatch({ type: 'ADD_PERSON', payload: newItem });
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  return (
    <>
      {state.isModalShown && <Modal modalContent={state.modalContent} />}
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
      {state.people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      ))}
    </>
  );
};

export default Index;
