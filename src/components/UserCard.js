import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      {props.isBlocked ? <p>BLOCKED!!</p> : <p> </p>}
      {props.isAdmin ? <p>admin</p> : <p> </p>}
      <p>I want it: {props.wants}</p>
      <p>I have it: {props.have}</p>
      <p>I had it: {props.had}</p>
      <p>I can let it go: {props.dontNeed}</p>
    </div>
  );
}
