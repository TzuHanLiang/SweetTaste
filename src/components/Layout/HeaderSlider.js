import React from "react";
import styles from "./HeaderSlider.module.css";

const slider = props => (
  <div className="header-image h-hero__bg">
    <ul className={styles.cb_slideshow}>
      <li>
        <img
          src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d2452cace2ee90c9781c7a39c9a30cf&auto=format&fit=crop&w=1050&q=80"
          alt="pure css3 slider"
          className="header-image__img"
        />
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1486428128344-5413e434ad35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acf6a60daa0703c494b375a30748ae74&auto=format&fit=crop&w=1050&q=80"
          alt="pure css3 slider"
          className="header-image__img"
        />
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1426869884541-df7117556757?ixlib=rb-0.3.5&s=ba832e05d1024545c66a509e8ec530b3&auto=format&fit=crop&w=1050&q=80"
          alt="pure css3 slider"
          className="header-image__img"
        />
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-0.3.5&s=ca47c545ac44c7b3a71e881c191f2392&auto=format&fit=crop&w=1050&q=80"
          alt="pure css3 slider"
          className="header-image__img"
        />
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1481464227355-4ede93be2f69?ixlib=rb-0.3.5&s=1d15e379068c55efb1a0059f6bbe8c05&auto=format&fit=crop&w=1015&q=80"
          alt="pure css3 slider"
          className="header-image__img"
        />
      </li>
    </ul>
  </div>
);

export default slider;
