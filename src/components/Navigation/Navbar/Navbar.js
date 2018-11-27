import React from "react";
import { Link } from "react-router-dom";

import NavigationList from "../NavigationList/NavigationList";
import Cart from "../Cart/Cart";
import Logo from "../../Logo/Logo";

const NavigationNavbar = props => {
  return (
    <header className="Navigation__header">
      {/* logo */}
      <Logo />
      <nav className="Navigation__nav">
        {/* navigation list */}
        <NavigationList />
        {/* navigation cart */}
        <Cart />
      </nav>
    </header>
  );
};

export default NavigationNavbar;
