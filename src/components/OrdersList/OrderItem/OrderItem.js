import React from "react";
import OrderControl from "./OrderControl/OrderControl";

// maybe this one will be change to class component
const orderItem = props => {
  return (
    <div className="order">
      <div className="order__img">
        <img src={props.image} alt="Sweets Image" />
      </div>
      <div className="order__text-box">
        <h3 className="heading__primary-main">{props.name}</h3>
        <p className="heading__primary-sub">NT ${props.price}</p>
      </div>
      <OrderControl />
      <div className="order__price">NT $450</div>
      <button className="order__delete">Delete</button>
    </div>
  );
};

export default orderItem;
