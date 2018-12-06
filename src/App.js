import React, { Component } from "react";
import { Route } from "react-router-dom";
//layout
import Layout from "./hoc/Layout/Layout";
import FooterModify from "./components/Layout/FooterModify";

//containers (pages)
import Products from "./containers/Products/Products";
import Checkout from "./containers/Checkout/Checkout";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Orders from "./containers/Orders/Orders";
import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";

import CheckoutSuccess from "./components/Checkout/CheckoutSuccess";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* <Switch> */}
          <Route path="/auth" component={Auth} />
          <Route path="/products" component={Products} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/contact-data" component={ContactData} />
          <Route path="/checkout-success" exact component={CheckoutSuccess} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/" exact component={Home} />
          {/* </Switch> */}
          <FooterModify />
        </Layout>
      </div>
    );
  }
}

export default App;
