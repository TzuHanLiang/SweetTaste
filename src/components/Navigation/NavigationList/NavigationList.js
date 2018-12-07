import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className="Navigation__list" onClick={props.closed}>
    <NavigationItem link="/">首頁</NavigationItem>
    <NavigationItem link="/products">甜點</NavigationItem>
    {props.isAuth ? (
      <>
        <NavigationItem link="/orders">
          <i className="fas fa-user" />
        </NavigationItem>
        <NavigationItem link="/logout">登出</NavigationItem>
      </>
    ) : (
      <NavigationItem link="/auth">登入/註冊</NavigationItem>
    )}
    <NavigationItem link="/checkout">
      <i className="fas fa-shopping-cart" />
    </NavigationItem>
    {/* <NavigationItem link="/register">註冊</NavigationItem> */}
  </ul>
);

export default navigationItems;
