import React from "react";

const cartToggle = props => {
  return (
    <div className="cart-toggle" onClick={props.toggle}>
      <div className="cart-toggle__icon">
        <i className="fas fa-shopping-cart" />
        {/* <i className="fas fa-shopping-bag" /> */}
        <span className="cart-toggle__title">{props.count}</span>
      </div>
    </div>
  );
};

export default cartToggle;

// https://yanoon.com.tw/shop/products.html
