import React from "react";
import Logo from "../../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Cart from "../Cart/Cart";

const sideDrawer = props => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.show) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      {/* <div className={attachedClasses.join(" ")}> */}
      <Cart />
      <div className={styles.SideDrawer}>
        <Logo />
        <nav>
          <NavigationList />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
