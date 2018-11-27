import React, { Component } from "react";

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
      <div class="col-container l-header">
        <div class="col-row h-align-items-center">
          <a class="l-header__bars h-none h-md-block">
            <i class="fas fa-bars h-none h-md-inline" />
          </a>
          <h1 class="l-header__logo">
            <a href="index.html" class="h-hideText">
              logo
            </a>
          </h1>
          <ul class="l-header__menu h-ml-auto h-flex-row h-flex h-md-none">
            <li>
              {" "}
              <a href="index.html">首頁 </a>
            </li>
            <li>
              {" "}
              <a href="product.html">甜點</a>
            </li>
            <li>
              {" "}
              <a href="login.html">登入</a>
            </li>
          </ul>
          <a href="cart.html" class="l-header__cart">
            <i class="fas fa-shopping-cart" />
          </a>
        </div>
      </div>
    );
  }
}

export default layout;
