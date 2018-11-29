import React, { Component } from "react";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import NavDrawer from "../../components/Navigation/NavDrawer/NavDrawer";
import NavToggle from "../../components/Navigation/NavToggle/NavToggle";

import Logo from "../../components/Logo/Logo";

class layout extends Component {
  state = {
    showNavigation: false,
    showOrderSummary: false // 用來控制cartSideDrawer的開關
  };

  navigationClosedHandler = () => {
    this.setState({
      showNavigation: false
    });
  };
  navigationToggledHandler = () => {
    this.setState(preState => {
      return {
        showNavigation: !preState.showNavigation,
        showOrderSummary: false
      };
    });
  };

  render() {
    return (
      <>
        <NavToggle toggle={this.navigationToggledHandler} />
        {/* logo */}
        <Logo />
        <Navbar show={this.state.showNavigation} />
        <NavDrawer
          show={this.state.showNavigation}
          closed={this.navigationClosedHandler}
        />
        <main style={{ marginTop: "7.2rem", width: "100vw" }}>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default layout;
