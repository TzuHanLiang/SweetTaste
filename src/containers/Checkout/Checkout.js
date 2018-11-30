import React, { Component } from "react";
import CartItem from "../../components/Checkout/Cart/CartItem/CartItem";
import CartItemsSummary from "../../components/Checkout/Cart/CartItemsSummary/CartItemsSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import Spinner from "../../components/UI/Spinner/Spinner";

class Checkout extends Component {
  state = {
    cart: [
      {
        id: "2zBDAxX",
        img: "https://bit.ly/2zBDAxX",
        price: 120,
        tag: "本日精選",
        title: "蔓越梅蛋糕",
        count: 2
      },
      {
        id: "2R5tqwD",
        img: "https://bit.ly/2R5tqwD",
        price: 420,
        tag: "本日精選",
        title: "繽紛馬卡龍",
        count: 1
      }
    ],
    shippingFee: 160,
    totalPrice: 0
  };

  // 利用<Route/> Component 提供的props 取得query params 裡面的資料
  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const cartItem = {};
    // let totalPrice = 0;
    for (let params of query.entries()) {
      // ["title": "蔓越梅蛋糕"]
      // if (params[0] === "totalPrice") {
      //   totalPrice = +params[1];
      // }
      if (params[0] === "price" || params[0] === "count") {
        cartItem[params[0]] = +params[1];
      } else {
        cartItem[params[0]] = params[1];
      }
    }
    const updateCart = [...this.state.cart];
    if (Object.keys(cartItem).length) {
      updateCart.unshift(cartItem);
      this.setState({ cart: updateCart });
    }
  };

  addCartItemHandler = item => {
    // 增加購物車裡面的物品
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex(i => i.id === item.id);

    const oldCount = updateCart[index].count;
    const updateCount = oldCount + 1;
    updateCart[index].count = updateCount;

    // 更新價格
    const oldPrice = this.state.totalPrice;
    const priceAddition = updateCart[index].price;
    const updatePrice = oldPrice + priceAddition;

    this.setState({
      cart: updateCart,
      totalPrice: updatePrice
    });
  };
  removeCartItemHandler = item => {
    // 減少購物車裡面的物品
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex(i => i.id === item.id);

    const oldCount = updateCart[index].count;
    const updateCount = oldCount - 1;
    updateCart[index].count = updateCount;

    // 更新價格
    const oldPrice = this.state.totalPrice;
    const priceAddition = updateCart[index].price;
    const updatePrice = oldPrice - priceAddition;

    this.setState({
      cart: updateCart,
      totalPrice: updatePrice
    });
  };
  deleteCartItemHandler = item => {
    // 刪除購物車裡面的物品
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex(i => i.id === item.id);
    updateCart.splice(index, 1);

    // 重新計算總價
    const updateTotalPrice = this.state.cart.reduce(
      (acc, item) => (acc += item.price),
      0
    );

    this.setState({
      cart: updateCart,
      totalPrice: updateTotalPrice
    });
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
    // this.props.history.replace("/contact-data");
  };

  render() {
    const cartItems = !this.state.cart ? (
      <Spinner />
    ) : (
      this.state.cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          add={this.addCartItemHandler}
          remove={this.removeCartItemHandler}
          delete={this.deleteCartItemHandler}
        />
      ))
    );
    return (
      <div className="order">
        {console.log(this.state.cart)}
        <div className="row">
          <div className="col-2-of-3">
            <div className="order__productList">
              <p className="heading-primary--medium">您的購物車</p>
            </div>
            {cartItems}
          </div>
          <div className="col-1-of-3">
            <CartItemsSummary
              shippingFee={this.state.shippingFee}
              totalPrice={this.state.totalPrice}
              checkoutContinue={this.checkoutContinuedHandler}
            />
          </div>
        </div>
        {/* impletement nested route */}
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              cart={this.state.cart}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
