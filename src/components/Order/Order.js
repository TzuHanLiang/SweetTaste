import React from "react";

import classes from "./Order.module.css";

const order = props => {
  const productOutput = props.products.map(product => {
    return (
      <span
        style={{
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
          fontSize: "16px"
        }}
        key={product.id}
      >
        {product.title} ({product.count})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p className="heading-primary--medium">品項: {productOutput}</p>
      <p className="heading-primary--sm">
        總金額: <strong>NT$ {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
