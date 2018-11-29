import React from "react";

import NavigationList from "../NavigationList/NavigationList";

const navDrawer = props => {
  const { show, closed } = props;
  let attachedClasses = ["Navigation__Drawer", "Navigation__Drawer--close"];
  if (show) {
    attachedClasses = ["Navigation__Drawer", "Navigation__Drawer--open"];
  }
  return (
    <>
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationList />
        </nav>
      </div>
    </>
  );
};

export default navDrawer;
