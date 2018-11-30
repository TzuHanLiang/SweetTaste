import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Products from "./containers/Products/Products";

import Checkout from "./containers/Checkout/Checkout";
// import ContactData from "./containers/Checkout/ContactData/ContactData";
import Home from "./containers/Home/Home";

import "./App.css";
import FooterModify from "./components/Layout/FooterModify";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/checkout" component={Checkout} />
            {/* <Route path="/contact-data" component={ContactData} /> */}
            <Route path="/" exact component={Home} />
          </Switch>
          <FooterModify />
        </Layout>
      </div>
    );
  }
}

export default App;
