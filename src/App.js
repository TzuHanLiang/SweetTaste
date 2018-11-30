import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Products from "./containers/Products/Products";
import Order from "./containers/Order/Order";
import Checkout from "./containers/Checkout/Checkout";
import Home from "./containers/Home/Home";

import "./App.css";
import FooterModify from "./components/Layout/FooterModify";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/order-summary" component={Order} />
          <Route path="/checkout" component={Checkout} />
          <FooterModify />
        </Layout>
      </div>
    );
  }
}

export default App;
