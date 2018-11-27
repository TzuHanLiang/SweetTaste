import React, { Component } from "react";

// turn functional component: orderSummary to class component
// so that we can add lifecycle hooks to see when this component
// be re-rendered. because it will keep rendering when
// totalPrice and products change which is unneccessary
// so we can improve that.

class OrderSummary extends Component {
  // this could be a functional component
  componentWillUpdate = (nextProps, nextState) => {
    console.log("[OrderSummary] will update");
  };

  render() {
    // products will be a list of object
    const products = this.props.products.map(product => {
      return (
        <li key={product.id} className="h-m-3 h-flex">
          <div class="p-checkout__orderDetail__section__productList__img">
            <img src={product.image} alt={product.name} />
          </div>
          <div class="p-checkout__orderDetail__section__productList__name h-pl-3 h-pb-2 h-pt-2 h-flex h-flex-column">
            <h3>
              {product.name} + {product.number}
            </h3>
            <span>
              NT$ {product.price}*{product.number}
            </span>
          </div>
        </li>
      );
    });

    return (
      <div class="p-checkout__orderDetail">
        <div class="p-checkout__orderDetail__order">
          <div class="p-checkout__orderDetail__section">
            <h2 class="p-checkout__orderDetail__section__title h-py-3">
              訂單摘要
            </h2>
            <ul class="p-checkout__orderDetail__section__detail">
              <li class="p-checkout__orderDetail__section__detail__subTotal h-flex h-justify-content-between">
                <span>小計 </span>
                <span>NT$ 2,700</span>
              </li>
              <li class="p-checkout__orderDetail__section__detail__freight h-flex h-justify-content-between">
                <span>運費</span>
                <span>NT$ 300</span>
              </li>
              <li class="p-checkout__orderDetail__section__detail__totalPrice h-flex h-justify-content-between">
                <span>總計</span>
                <span>NT$ 3,000</span>
              </li>
            </ul>
          </div>
          <div class="p-checkout__orderDetail__section">
            <h2 class="p-checkout__orderDetail__section__title h-py-3">
              購物清單
            </h2>
            <ul class="p-checkout__orderDetail__section__productList">
              {products}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummary;
