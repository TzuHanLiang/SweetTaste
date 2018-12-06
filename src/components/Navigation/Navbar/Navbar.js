import React from "react";

import NavigationList from "../NavigationList/NavigationList";

const NavigationNavbar = props => {
  return (
    <header className="Navigation__header">
      <nav className="Navigation__nav">
        {/* navigation list */}
        <NavigationList isAuth={props.isAuth} />
      </nav>
    </header>
  );
};

export default NavigationNavbar;
