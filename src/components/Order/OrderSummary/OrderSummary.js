import React from "react";
import { Link } from "react-router-dom";

const orderSummary = props => {
  return (
    <div className="order__summary">
      <h2 className="heading-primary--medium heading-primary--medium--lightest order__summary-title">
        訂單摘要
      </h2>
      <ul className="order__summary-detail">
        <li className=" heading-primary--xs--light">
          <span>小計 </span>
          <span>NT$ {props.totalPrice}</span>
        </li>
        <li className="heading-primary--xs--light">
          <span>運費</span>
          <span>NT$ {props.shippingFee}</span>
        </li>
        <li className=" heading-primary--sm--light--lightest">
          <span>總計</span>
          <span>NT$ {props.totalPrice + props.shippingFee}</span>
        </li>
      </ul>
      <Link
        to="/checkout"
        className="btn heading-primary--medium order__summary-submit"
      >
        結帳
      </Link>
    </div>
  );
};

export default orderSummary;
