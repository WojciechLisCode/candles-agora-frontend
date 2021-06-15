import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectMeUser } from "../store/selectors/meUser";

export default function Navbar() {
  const meUser = useSelector(selectMeUser);
  return (
    <div>
      <div>
        <NavLink to="/">*Candles*</NavLink>
        <NavLink to="/users">*Users*</NavLink>
        <span>LOGO</span>
        <NavLink to="/user/2">*My account*</NavLink>
        {console.log(meUser)}
        {meUser.name === null ? (
          <NavLink to="/login">*Login/Signup*</NavLink>
        ) : (
          <NavLink to="/">*Logout*</NavLink>
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
