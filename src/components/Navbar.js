import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <NavLink to="/">*Candles*</NavLink>
        <NavLink to="/users">*Users*</NavLink>
        <span>LOGO</span>
        <NavLink to="/user/2">*My account*</NavLink>
        <NavLink to="/login">*Login/Signup*</NavLink>
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
