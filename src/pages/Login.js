import "../styles/login.css";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { selectToken } from "../store/selectors/meUser";
import { login } from "../store/actions/meUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }
  return (
    <div className="Login">
      <div className="buttonsBar"></div>
      <h2>Login page</h2>
      <form onSubmit={submitForm}>
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
          Login
        </button>
      </form>
      <div>
        <p>or</p>
        <p>
          <Link to="/signup">
            <button className="userButton">Create new user</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
