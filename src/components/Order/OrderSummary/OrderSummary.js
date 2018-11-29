import React from "react";

const orderSummary = props => {
  return (
    <div className="order__summary">
      <h2 className="heading-primary--medium heading-primary--medium--lightest order__summary-title">
        訂單摘要
      </h2>
      <ul className="order__summary-detail">
        <li className=" heading-primary--xs--light">
          <span>小計 </span>
          <span>NT$ {props.summary.productsPrice}</span>
        </li>
        <li className="heading-primary--xs--light">
          <span>運費</span>
          <span>NT$ {props.summary.shippingFee}</span>
        </li>
        <li className=" heading-primary--sm--light--lightest">
          <span>總計</span>
          <span>NT$ {props.summary.totalPrice}</span>
        </li>
      </ul>
      <a
        href="/checkout"
        className="btn heading-primary--medium order__summary-submit"
      >
        結帳
      </a>
    </div>
  );
};

export default orderSummary;
