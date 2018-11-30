import React from "react";

const cartItem = props => {
  return (
    <div className="order__product">
      <div className="order__product-img">
        <img src={props.item.img} alt="sweets" />
      </div>

      <div className="order__product-info">
        <h3 className="heading-primary--sm">{props.item.title}</h3>
        <span className="heading-primary--xs--b">NT$ {props.item.price}</span>
      </div>
      <div className="order__product-count">
        <button onClick={() => props.add(props.item)}>
          <i className="fas fa-plus" />
        </button>
        <span className="heading-primary--xs">{props.item.count}</span>
        <button onClick={() => props.remove(props.item)}>
          <i className="fas fa-minus" />
        </button>
      </div>
      <div className="order__product-price">
        <span className="heading-primary--sm">
          NT$ {props.item.price * props.item.count}
        </span>
      </div>
      <div className="order__product-delete">
        <button onClick={() => props.delete(props.item)}>
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default cartItem;
