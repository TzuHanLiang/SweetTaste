// rafc
import React, { Component } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    // we are not checking if the modalClosed props were changed in here
    // and we did not use PureComponent in here, because it run more check
    // than we need to do.
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  };
  componentWillUpdate = (nextProps, nextState) => {
    console.log("[Modal] will update");
  };

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
