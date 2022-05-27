import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../redux/action";
import cuid from "cuid";

export default function AddPerson() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setName(dispatch(addPerson({ id: cuid(), name: name })));
    e.target.name.value = "";
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="name"
        placeholder="full Name"
        onChange={handleNameChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
