import React from "react";

const navigationItem = props => (
  <li className="Navigation__item">
    <a
      href={props.link}
      className={
        props.active
          ? "Navigation__link--active Navigation__link"
          : "Navigation__link"
      }
    >
      {props.children}
    </a>
  </li>
);

export default navigationItem;
