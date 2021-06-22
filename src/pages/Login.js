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
    <div>
      <h2>Login Page</h2>
      <form onSubmit={submitForm}>
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
        <button type="submit">Login</button>
      </form>
      <div>
        <p>or</p>
        <p>
          <Link to="/signup">Create new user</Link>
        </p>
      </div>
    </div>
  );
}
