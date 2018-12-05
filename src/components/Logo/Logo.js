import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/img/logo-all-dark.svg";

const logo = props => (
  <h1 className="Navigation__logo-box">
    <NavLink to="/" className="Navigation__logo">
      <img src={Logo} alt="Logo" />
    </NavLink>
  </h1>
);

export default logo;
