import React from "react";
import { Link } from "react-router-dom";

const navigationItem = props => (
  <li className="Navigation__item">
    <Link
      to={props.link}
      className={
        props.active
          ? "Navigation__link--active Navigation__link"
          : "Navigation__link"
      }
    >
      {props.children}
    </Link>
  </li>
);

export default navigationItem;
