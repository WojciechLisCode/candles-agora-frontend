import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../store/actions/meUser";
import { selectMeUser } from "../store/selectors/meUser";

export default function Navbar() {
  const meUser = useSelector(selectMeUser);
  const dispatch = useDispatch();
  return (
    <div className="Navbar flex_column m0">
      <div className="links flex">
        <Link className="linksItem flex_column align_c" to="/">
          <p>Candles</p>
        </Link>
        <Link className="linksItem flex_column align_c" to="/users">
          <p>Users</p>
        </Link>
        <div className="logoAndSelector">
          <span className="logo">Candles Agora</span>
          <div className="langSel">
            <p className="langSelTitle">Choose language:</p>
            <select>
              <option value="English">English</option>
            </select>
          </div>
        </div>
        {meUser.token !== null ? (
          <Link
            className="linksItem flex_column align_c"
            to={`/user/${meUser.id}`}
          >
            <p>My account</p>
          </Link>
        ) : (
          <p className="linksItem flex_column align_c"></p>
        )}
        {meUser.token === null ? (
          <Link className="linksItem flex_column align_c" to="/login">
            <p>Login/Signup</p>
          </Link>
        ) : (
          <Link
            className="linksItem flex_column align_c"
            onClick={() => dispatch(logOut())}
            to="/"
          >
            <p>Logout</p>
          </Link>
        )}
      </div>
    </div>
  );
}
