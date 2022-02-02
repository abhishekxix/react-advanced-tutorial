export const reducer = (state, action) => {
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

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalShown: false,
    };
  }

  if (action.type === 'REMOVE_PERSON') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalShown: true,
      modalContent: 'Item removed',
    };
  }
  throw new Error('No matching action type.');
};
