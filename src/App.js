import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Products from "./containers/Products/Products";

import Checkout from "./containers/Checkout/Checkout";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Home from "./containers/Home/Home";

import "./App.css";
import FooterModify from "./components/Layout/FooterModify";

class App extends Component {
  state = {
    cart: [], //
    count: 0,
    totalPrice: 0
  };
  //讓在 Product.js fetch到的商品資料傳過來(只是試試看)
  addProductsHandler = products => {
    this.setState({ totalProducts: products });
  };

  addCartItemHandler = product => {
    // 更新購物車裡面的數量(同一品項新增一個也加一)
    const oldTotalCount = this.state.count;
    const updateTotalCount = oldTotalCount + 1;

    // 更新購物車裡面的物品
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.count = 1;
      updateCart.push(product);
    } else {
      const oldCount = updateCart[index].count;
      const updateCount = oldCount + 1;
      updateCart[index].count = updateCount;
    }

    // 更新總價
    const oldPrice = this.state.totalPrice;
    const priceAddition = product.price;
    const updatePrice = oldPrice + priceAddition;

    this.setState({
      cart: updateCart,
      count: updateTotalCount,
      totalPrice: updatePrice
    });
  };

  removeCartItemHandler = product => {
    // 更新購物車裡面的數量(同一品項減少一個也減一)
    const oldTotalCount = this.state.count;
    const updateTotalCount = oldTotalCount - 1;

    // 減少購物車裡面的物品
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex(i => i.id === product.id);

    const oldCount = updateCart[index].count;
    const updateCount = oldCount - 1;
    updateCart[index].count = updateCount;

    // 更新價格
    const oldPrice = this.state.totalPrice;
    const priceAddition = product.price;
    const updatePrice = oldPrice - priceAddition;

    this.setState({
      cart: updateCart,
      count: updateTotalCount,
      totalPrice: updatePrice
    });
  };

  deleteCartItemHandler = product => {
    // 更新購物車裡面的數量
    const oldTotalCount = this.state.count;
    const updateTotalCount = oldTotalCount - product.count;

    // 刪除購物車裡面的物品
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex(i => i.id === product.id);
    updateCart.splice(index, 1);

    // 重新計算總價
    const updateTotalPrice = this.state.cart.reduce(
      (acc, item) => (acc += item.price),
      0
    );

    this.setState({
      cart: updateCart,
      count: updateTotalCount,
      totalPrice: updateTotalPrice
    });
  };

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
                cart={this.state.cart}
                count={this.state.count}
                totalPrice={this.state.totalPrice}
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
                cart={this.state.cart}
                totalPrice={this.state.totalPrice}
                addToCart={this.addCartItemHandler}
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
                cart={this.state.cart}
                totalPrice={this.state.totalPrice}
              />
            )}
          />
          <Route path="/" exact component={Home} />
          {/* </Switch> */}
          <FooterModify />
        </Layout>
      </div>
    );
  }
}

export default App;
