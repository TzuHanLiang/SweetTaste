import React from "react";
import { NavLink } from "react-router-dom";

const navigationItem = props => (
  <li className="Navigation__item">
    <NavLink to={props.link} exact className="Navigation__link">
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
