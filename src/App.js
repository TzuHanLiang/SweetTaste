import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/index";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

//layout
import Layout from "./hoc/Layout/Layout";
import FooterModify from "./components/Layout/FooterModify";

//containers (pages)
import Logout from "./containers/Auth/Logout/Logout";
import Products from "./containers/Products/Products";
import Home from "./containers/Home/Home";

import "./App.css";

const asyncCheckoutSuccess = asyncComponent(() => {
  return import("./containers/Checkout/CheckoutSuccess");
});
const asyncContactData = asyncComponent(() => {
  return import("./containers/Checkout/ContactData/ContactData");
});
const asyncCheckout = asyncComponent(() => {
  return import("./containers/Checkout/Checkout");
});
const asyncOrders = asyncComponent(() => {
  return import("./containers/Orders/Orders");
});
const asyncAuth = asyncComponent(() => {
  return import("./containers/Auth/Auth");
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/products" component={Products} />
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/checkout-success" component={asyncCheckoutSuccess} />
          <Route path="/contact-data" component={asyncContactData} />
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/products" component={Products} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/" exact component={Home} />
          {/* 因為"/auth" 不存在 isAuthenticated 所以在Auth.js的redirect失效了, 有兩種解法1.把 /auth 路徑加進來 2.寫如下的條件判斷式 */}
          {this.props.isCartEmpty ? (
            <Redirect to="/products" />
          ) : (
            <Redirect to="/checkout" />
          )}
        </Switch>
      );
    }

    return (
      <div className="App">
        <Layout>
          {routes}
          <FooterModify />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    isCartEmpty: state.products.cart.length === 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actionCreator.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
