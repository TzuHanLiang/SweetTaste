import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className="Navigation__list">
    <NavigationItem link="/" active>
      首頁
    </NavigationItem>
    <NavigationItem link="/">甜點</NavigationItem>
    <NavigationItem link="/">登入/註冊</NavigationItem>
    {/* <NavigationItem link="/register">註冊</NavigationItem> */}
  </ul>
);

export default navigationItems;
