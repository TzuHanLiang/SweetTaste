import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
import CartItem from "../../components/Checkout/Cart/CartItem/CartItem";
import CartItemsSummary from "../../components/Checkout/Cart/CartItemsSummary/CartItemsSummary";

class Checkout extends Component {
  checkoutContinuedHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/contact-data");
  };

  render() {
    const {
      cart,
      addToCart,
      removeFromCart,
      deleteFromCart,
      totalPrice,
      shippingFee
    } = this.props;

    const cartItems = cart.length ? (
      cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          add={addToCart}
          remove={removeFromCart}
          delete={deleteFromCart}
          disabled={item.count < 2}
        />
      ))
    ) : (
      <>
        <p className="heading-primary--large h-m-4">~ 購物車是空的 ~</p>
        <NavLink
          className="btn btn--light heading-primary--medium"
          to="/products"
        >
          去逛逛
        </NavLink>
      </>
    );
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
              shippingFee={shippingFee}
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
    cart: state.products.cart,
    totalPrice: state.products.totalPrice,
    shippingFee: state.products.shippingFee
  };
};
// NOTE: mapDispatchToProps receives a function or holds a function which receives the dispatch function as an argument and then also the returns object with props function mappings
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(actionCreator.addProduct(product)),
    removeFromCart: product => dispatch(actionCreator.removeProduct(product)),
    deleteFromCart: product => dispatch(actionCreator.deleteProduct(product)),
    onInitPurchase: () => dispatch(actionCreator.purchaseInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
