import React, { Component } from "react";

class Cart extends Component {
  state = {
    cart: []
  };
  render() {
    return (
      <a href="cart.html" className="Navigation__cart">
        <i className="fas fa-shopping-cart" />
        <span className="cart__number">{this.state.cart.length}</span>
      </a>
    );
  }
}

export default Cart;
