import React, { Component } from "react";
import { Route } from "react-router-dom";
//layout
import Layout from "./hoc/Layout/Layout";
import FooterModify from "./components/Layout/FooterModify";

//containers (pages)
import Logout from "./containers/Auth/Logout/Logout";
import Auth from "./containers/Auth/Auth";
import Orders from "./containers/Orders/Orders";
import CheckoutSuccess from "./containers/Checkout/CheckoutSuccess";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Checkout from "./containers/Checkout/Checkout";
import Products from "./containers/Products/Products";
import Home from "./containers/Home/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* <Switch> */}
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={Auth} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/checkout-success" exact component={CheckoutSuccess} />
          <Route path="/contact-data" component={ContactData} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/products" component={Products} />
          <Route path="/" exact component={Home} />
          {/* </Switch> */}
          <FooterModify />
        </Layout>
      </div>
    );
  }
}

export default App;
