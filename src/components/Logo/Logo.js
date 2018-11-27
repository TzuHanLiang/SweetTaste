import React from "react";

import Logo from "../../assets/img/logo-all-dark.svg";

const logo = props => (
  <h1 className="Navigation__logo-box">
    <a href="index.html" className="Navigation__logo">
      <img src={Logo} alt="Logo" />
    </a>
  </h1>
);

export default logo;
