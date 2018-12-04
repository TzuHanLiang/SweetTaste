import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionsType from "../../store/actions";
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
        disabled={item.count < 1}
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
// NOTE: mapStateToProps holds a function which receives the state automatically and which returns a javascript object where we define which property should hold which slice of the state.
const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalPrice: state.totalPrice
  };
};
// NOTE: mapDispatchToProps receives a function or holds a function which receives the dispatch function as an argument and then also the returns object with props function mappings
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product =>
      dispatch({ type: actionsType.ADD_PRODUCT, product: product }),
    removeFromCart: product =>
      dispatch({ type: actionsType.REMOVE_PRODUCT, product: product }),
    deleteFromCart: product =>
      dispatch({ type: actionsType.DELETE_PRODUCT, product: product })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
