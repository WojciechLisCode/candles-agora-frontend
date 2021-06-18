import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CandleCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.imageUrl} alt={props.name}></img>
      <p>I want it: {props.wants}</p>
      <p>I have it: {props.have}</p>
      <p>I had it: {props.had}</p>
      <p>I can let it go: {props.dontNeed}</p>
    </div>
  );
}
