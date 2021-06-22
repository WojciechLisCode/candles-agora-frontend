import "../styles/navbar.css";

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../store/actions/meUser";
import { selectMeUser } from "../store/selectors/meUser";

export default function Navbar() {
  const meUser = useSelector(selectMeUser);
  const dispatch = useDispatch();
  return (
    <div className="Navbar">
      <div className="links">
        <Link className="linksItem" to="/">
          <p>Candles</p>
        </Link>
        <Link className="linksItem" to="/users">
          <p>Users</p>
        </Link>
        <div className="logoAndSelector">
          <span className="logo">CANDLES AGORA</span>
          <div className="langSel">
            <p className="langSelTitle">Choose language:</p>
            <select>
              <option value="English">English</option>
            </select>
          </div>
        </div>
        <Link className="linksItem" to="/user/2">
          <p>My account</p>
        </Link>
        {meUser.token === null ? (
          <Link className="linksItem" to="/login">
            <p>Login/Signup</p>
          </Link>
        ) : (
          <Link className="linksItem" onClick={() => dispatch(logOut())} to="/">
            <p>Logout</p>
          </Link>
        )}
      </div>
    </div>
  );
}
