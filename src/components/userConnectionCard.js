import "../styles/userConnectionCard.css";

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function userConnectionCard(props) {
  return (
    <Link className="UserConnectionCard" to={`/candle/${props.candleId}`}>
      <div>
        <h3>{props.name}</h3>
        <img className="image" src={props.imageUrl} alt={props.name}></img>
        <p>{props.text}</p>
      </div>
    </Link>
  );
}
