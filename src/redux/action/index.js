import { ADD_PERSON, REMOVE_PERSON, UPDATE_PERSON } from "./actionType";

export const addPerson = (name) => ({
  type: ADD_PERSON,
  name,
});

export const removePerson = (id) => ({
  type: REMOVE_PERSON,
  id,
});

export const updatePerson = ({ id, name }) => ({
  type: UPDATE_PERSON,
  id,
  name,
});
