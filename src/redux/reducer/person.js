const initialState = {
  data: [],
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        data: [...state.data, action.name],
      };
    case "REMOVE_PERSON":
      return {
        ...state,
        data: [...state.data.filter((person) => person.id !== action.id)],
      };
    case "UPDATE_PERSON":
      return {
        ...state,
        data: [
          ...state.data.filter((person) => person.id !== action.id),
          { id: action.id, name: action.name },
        ],
      };
    default:
      return state;
  }
};

export default person;
