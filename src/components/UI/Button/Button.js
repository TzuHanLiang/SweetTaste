import React from "react";

const Button = props => (
  <button className={[...props.btnType].join("")} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
