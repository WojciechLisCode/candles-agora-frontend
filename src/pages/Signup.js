import "../styles/signup.css";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signup } from "../store/actions/meUser";
import { selectToken } from "../store/selectors/meUser";

export default function Signup() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signup(name, email, password));
  }

  return (
    <div className="Signup">
      <div className="buttonsBar"></div>
      <h2>Signup page</h2>
      <form onSubmit={submitForm}>
        <div className="input">
          <p className="inputDesc">Name:</p>
          <input
            className="inputField"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="input">
          <p className="inputDesc">Email:</p>
          <input
            className="inputField"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="input">
          <p className="inputDesc">Password:</p>
          <input
            className="inputField"
            type="passord"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button className="userButton" type="submit">
          Sign up!
        </button>
      </form>
    </div>
  );
}
