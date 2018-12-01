import React from "react";

const headerImage = props => {
  return (
    <div className="header-image">
      <div className="header-image__container">
        <img src={props.img} alt="Header" className="header-image__img" />
      </div>
    </div>
  );
};

export default headerImage;
