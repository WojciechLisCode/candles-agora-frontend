import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signup } from "../store/actions/meUser";

export default function Signup() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    event.preventDefault();

    dispatch(signup(name, email, password));
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={submitForm}>
        <p>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </p>
        <p>
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </p>
        <p>
          Password:
          <input
            type="passord"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </p>
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
}
