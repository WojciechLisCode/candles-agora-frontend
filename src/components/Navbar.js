import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../store/actions/meUser";
import { selectMeUser } from "../store/selectors/meUser";

export default function Navbar() {
  const meUser = useSelector(selectMeUser);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <NavLink to="/">*Candles*</NavLink>
        <NavLink to="/users">*Users*</NavLink>
        <span>LOGO</span>
        <NavLink to="/user/2">*My account*</NavLink>
        {meUser.token === null ? (
          <NavLink to="/login">*Login/Signup*</NavLink>
        ) : (
          <NavLink onClick={() => dispatch(logOut())} to="/">
            *Logout*
          </NavLink>
        )}
      </div>
      <div>
        <p>Choose language:</p>
        <select>
          <option value="English">English</option>
        </select>
      </div>
    </div>
  );
}
