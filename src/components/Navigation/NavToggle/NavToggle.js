import React from "react";

const navToggle = props => (
  <div className="Navigation__toggle">
    <div className="Navigation__button" onClick={props.toggle}>
      <span className="Navigation__icon">&nbsp;</span>
    </div>
  </div>
);

export default navToggle;
