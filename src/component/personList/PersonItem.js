import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { removePerson, updatePerson } from "../../redux/action";

export default function PersonItem(props) {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const nameRef = useRef(null);

  function handleDeleteButton(id) {
    dispatch(removePerson(id));
  }

  function handleUpdatePerson(e) {
    e.preventDefault();
    dispatch(
      updatePerson({ id: props.person.id, name: nameRef.current.value })
    );
    setIsUpdate(false);
    nameRef.current = null;
  }

  const rederForm = () => {
    return (
      <form onSubmit={handleUpdatePerson}>
        <input type="text" ref={nameRef} defaultValue={props.person.name} />
        <button type="submit">Update</button>
      </form>
    );
  };

  const rederItem = () => {
    return (
      <>
        {props.person.name}
        <button type="submit" onClick={() => setIsUpdate(true)}>
          Edit
        </button>
        <button
          type="submit"
          onClick={() => handleDeleteButton(props.person.id)}
        >
          Delete
        </button>
      </>
    );
  };

  return <div>{isUpdate ? rederForm() : rederItem()}</div>;
}
