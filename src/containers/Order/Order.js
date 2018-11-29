import React, { Component } from "react";
import CartItem from "../../components/Order/CartItem/CartItem";
import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";

class Order extends Component {
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
    summary: {
      productsPrice: 0,
      shippingFee: 160,
      totalPrice: 0
    }
  };
  addProductHandler = product => {
    // 更新購物車裡面的數量(同一品項新增一個也加一)
    const oldCount = this.state.count;
    const updateCount = oldCount + 1;

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
      count: updateCount,
      totalPrice: updatePrice
    });
  };
  render() {
    const cartItems = this.state.cart.map(item => (
      <CartItem key={item.id} item={item} />
    ));
    return (
      <div className="order">
        <div className="row">
          <div className="col-2-of-3">
            <div className="order__productList">
              <p className="heading-primary--medium">您的購物車</p>
            </div>
            {cartItems}
          </div>
          <div className="col-1-of-3">
            <OrderSummary summary={this.state.summary} />
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
