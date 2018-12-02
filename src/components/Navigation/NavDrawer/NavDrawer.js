import React from "react";

import NavigationList from "../NavigationList/NavigationList";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";

const navDrawer = props => {
  const { show, closed } = props;
  let attachedClasses = show
    ? ["Navigation__Drawer", "Navigation__Drawer--open"]
    : ["Navigation__Drawer", "Navigation__Drawer--close"];

  return (
    <>
      <Backdrop show={show} clicked={closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationList closed={closed} />
        </nav>
      </div>
    </>
  );
};

export default navDrawer;
