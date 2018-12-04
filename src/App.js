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

import CheckoutSuccess from "./components/Checkout/CheckoutSuccess";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* <Switch> */}
          <Route
            path="/products"
            render={props => (
              <Products
                {...props}
                // cart={this.state.cart}
                // count={this.state.count}
                // totalPrice={this.state.totalPrice}
                addToCart={this.addCartItemHandler}
                addProducts={this.addProductsHandler}
              />
            )}
          />
          <Route
            path="/checkout"
            render={props => (
              <Checkout
                {...props}
                // cart={this.state.cart}
                // totalPrice={this.state.totalPrice}
                // addToCart={this.addCartItemHandler}
                removeFromCart={this.removeCartItemHandler}
                deleteFromCart={this.deleteCartItemHandler}
              />
            )}
          />
          <Route
            path="/contact-data"
            render={props => (
              <ContactData
                {...props}
                // cart={this.state.cart}
                // totalPrice={this.state.totalPrice}
              />
            )}
          />
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
