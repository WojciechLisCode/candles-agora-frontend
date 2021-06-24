import "../styles/candleCard.css";

import React from "react";

export default function CandleCard(props) {
  return (
    <div className="CandleCard">
      <div className="imageAndName">
        <img
          className="image"
          src={props.imageUrl}
          alt={props.name}
          width="175"
          height="175"
        ></img>
        <div className="candleNumbers">
          <p>I want it: {props.wants}</p>
          <p>I have it: {props.have}</p>
          <p>I had it: {props.had}</p>
          <p>I can let it go: {props.dontNeed}</p>
        </div>
      </div>
      <h3>{props.name}</h3>
    </div>
  );
}
