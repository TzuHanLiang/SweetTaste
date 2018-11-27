import React, { Component } from "react";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };
  sideDrawerToggledHandler = () => {
    this.setState(preState => {
      return { showSideDrawer: !preState.showSideDrawer };
    });
  };
  render() {
    return (
      <>
        <Navbar
          show={this.state.showSideDrawer}
          drawerToggleClicked={this.sideDrawerToggledHandler}
        />
        <SideDrawer
        //   show={this.state.showSideDrawer}
        //   closed={this.sideDrawerClosedHandler}
        />
        <main style={{ "margin-top": "7.2rem" }}>{this.props.children}</main>
      </>
    );
  }
}

export default layout;
