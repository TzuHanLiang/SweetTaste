import React from "react";
import s from "./Navigation.module.css";

const navigation = () => {
  return (
    <div className={[s.col_container, s.l_header].join(" ")}>
      <div className="col-row h-align-items-center">
        <span className={[s.l_header__bars, s.h_none, s.h_d_block].join(" ")}>
          <i className="fas fa-bars h-none h-md-inline" />
        </span>
        <h1 className={s.l_header__logo}>
          <a href="index.html" className={s.h_hideText}>
            logo
          </a>
        </h1>
        <ul
          className={[
            s.l_header__menu,
            s.h_ml_auto,
            s.h_flex_row,
            s.h_flex,
            s.h_md_none
          ].join(" ")}
        >
          <li>
            <a href="index.html">首頁 </a>
          </li>
          <li>
            <a href="product.html">甜點</a>
          </li>
          <li>
            <a href="login.html">登入</a>
          </li>
        </ul>
        <a href="cart.html" className={s.l_header__cart}>
          <i className="fas fa-shopping-cart" />
        </a>
      </div>
    </div>
  );
};

export default navigation;
