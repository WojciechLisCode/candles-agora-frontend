import "../styles/userCard.css";

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserCard(props) {
  return (
    <div className="UserCard">
      <p className="name">{props.name}</p>
      <div className="status">
        {props.isAdmin ? (
          <p className="subStatus">Admin</p>
        ) : (
          <p className="subStatus"></p>
        )}
        {props.isBlocked ? (
          <p className="subStatus">BLOCKED!!</p>
        ) : (
          <p className="subStatus"></p>
        )}
      </div>
      <div className="numbers">
        <div className="subNumbers">
          <p>I want it: {props.wants}</p>
          <p>I have it: {props.have}</p>
        </div>
        <div className="subNumbers">
          <p>I had it: {props.had}</p>
          <p>I can let it go: {props.dontNeed}</p>
        </div>
      </div>
    </div>
  );
}
