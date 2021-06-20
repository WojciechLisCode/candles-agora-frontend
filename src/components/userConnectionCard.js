import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function userConnectionCard(props) {
  return (
    <div>
      <Link to={`/candle/${props.candleId}`}>
        <h3>{props.name}</h3>
        <img src={props.imageUrl} alt={props.name}></img>
        <p>{props.text}</p>
      </Link>
    </div>
  );
}
