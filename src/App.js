import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Products from "./containers/Products/Products";
import Order from "./containers/Order/Order";
import Checkout from "./containers/Checkout/Checkout";

import "./App.css";
import Footer from "./components/Header/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/products" component={Products} />
          <Route path="/order-summary" component={Order} />
          <Route path="/checkout" component={Checkout} />
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
