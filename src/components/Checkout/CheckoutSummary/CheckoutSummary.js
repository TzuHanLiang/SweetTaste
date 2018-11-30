import React from "react";
// import cartItem from "../Cart/CartItem/CartItem";

const checkoutSummary = props => {
  const productList = props.cart.map(product => (
    <li className="h-m-3 h-flex">
      <div
        style={{
          height: "110px",
          width: "165px",
          backgroundImage: `url(${product.img})`
        }}
        className="p-checkout__orderDetail__section__productList__img"
      />
      <div className="p-checkout__orderDetail__section__productList__name h-pl-3 h-pb-2 h-pt-2 h-flex h-flex-column">
        <h3 className="heading-primary--xs">
          {product.title}（{product.count}）
        </h3>
        <span className="heading-primary--sm">
          NT$ {product.count * product.price}
        </span>
      </div>
    </li>
  ));
  return (
    <div className="p-checkout__orderDetail">
      <div className="checkout__cancel" onClick={props.checkoutCancel}>
        <i className="far fa-times-circle" />
      </div>
      <div className="p-checkout__orderDetail__order">
        <div className="p-checkout__orderDetail__section">
          <h2 className="p-checkout__orderDetail__section__title h-py-3">
            訂單摘要
          </h2>
          <ul className="p-checkout__orderDetail__section__detail">
            <li className="p-checkout__orderDetail__section__detail__subTotal h-flex h-justify-content-between">
              <span>小計 </span>
              <span>NT$ {props.totalPrice}</span>
            </li>
            <li className="p-checkout__orderDetail__section__detail__freight h-flex h-justify-content-between">
              <span>運費</span>
              {/* 要從checkout container 傳過來, 想想怎麼傳 */}
              <span>NT$ 160</span>
            </li>
            <li className="p-checkout__orderDetail__section__detail__totalPrice h-flex h-justify-content-between">
              <span>總計</span>
              <span>NT$ {props.totalPrice + 160}</span>
            </li>
          </ul>
        </div>
        <div className="p-checkout__orderDetail__section">
          <h2 className="p-checkout__orderDetail__section__title h-py-3">
            購物清單
          </h2>
          <ul className="p-checkout__orderDetail__section__productList">
            {productList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default checkoutSummary;
