import React, { Component } from "react";
import CartItem from "../../components/Checkout/Cart/CartItem/CartItem";
import CartItemsSummary from "../../components/Checkout/Cart/CartItemsSummary/CartItemsSummary";

class Checkout extends Component {
  state = {
    shippingFee: 200
  };

  checkoutContinuedHandler = () => {
    this.props.history.push({
      pathname: "/contact-data",
      search: "?shippingFee=" + this.state.shippingFee
    });
  };

  render() {
    const {
      cart,
      addToCart,
      removeFromCart,
      deleteFromCart,
      totalPrice
    } = this.props;

    const cartItems = cart.map(item => (
      <CartItem
        key={item.id}
        item={item}
        add={addToCart}
        remove={removeFromCart}
        delete={deleteFromCart}
      />
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
            <CartItemsSummary
              shippingFee={this.state.shippingFee}
              totalPrice={totalPrice}
              checkoutContinue={this.checkoutContinuedHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
