import React from "react";

import NavigationList from "../NavigationList/NavigationList";

const NavigationNavbar = props => {
  return (
    <header className="Navigation__header">
      <nav className="Navigation__nav">
        {/* navigation list */}
        <NavigationList />
      </nav>
    </header>
  );
};

export default NavigationNavbar;
