import React from "react";
import { useSelector } from "react-redux";
import PersonItem from "./PersonItem";

export default function PersonList() {
  const personObj = useSelector((state) => state.person.data);

  console.log(personObj);

  const renderObj = personObj.map((person) => {
    return <PersonItem person={person} key={person.id} />;
  });

  return <div>{renderObj}</div>;
}
