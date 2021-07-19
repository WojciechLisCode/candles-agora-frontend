import React from "react";

export default function UserCard(props) {
  return (
    <div className="UserCard flex_column border w350">
      <p className="name">{props.name}</p>
      <div className="status flex_column">
        {props.isAdmin ? (
          <p className="subStatus m0">Admin</p>
        ) : (
          <p className="subStatus m0"></p>
        )}
        {props.isBlocked ? (
          <p className="subStatus m0">BLOCKED!!</p>
        ) : (
          <p className="subStatus m0"></p>
        )}
      </div>
      <div className="numbers flex">
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
