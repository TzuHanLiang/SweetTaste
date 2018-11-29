import React, { Component } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";

class cartSideDrawer extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  };
  render() {
    const { show, closed, children, totalPrice } = this.props;

    let attachedClasses = ["product__sideDrawer", "product__sideDrawer--close"];
    if (show) {
      attachedClasses = ["product__sideDrawer", "product__sideDrawer--open"];
    }
    return (
      <div>
        <Backdrop show={show} clicked={closed} />
        <div className={attachedClasses.join(" ")}>
          <h1
            onClick={closed}
            className="heading-primary--medium"
            style={{ cursor: "pointer" }}
          >
            購物車
          </h1>
          <div>{children}</div>
          <div
            style={{ margin: "2.5rem 0" }}
            className="heading-primary--medium "
          >
            總計: NT$ {totalPrice}
          </div>
          <button className="btn btn--light heading-primary--medium">
            檢視購物車
          </button>
        </div>
      </div>
    );
  }
}

export default cartSideDrawer;
