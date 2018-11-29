import React from "react";

const cartItem = props => {
  const { product } = props;
  return (
    <div className="product__cart-item">
      <div className="row">
        <div className="col-1-of-2">
          <div className="product__cart-item__img-box">
            <img
              src={product.img}
              alt="Item"
              className="product__cart-item__img"
            />
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="heading-primary--sm heading-primary--sm--light">
            {product.title}
          </div>
          <div className="heading-primary--xs ">購買數量: {product.count}</div>
          <div className="product__cart-item__price heading-primary--sm ">
            NT$ {product.price * product.count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartItem;
