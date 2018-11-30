import React, { Component } from "react";
import PropTypes from "prop-types";

class productCard extends Component {
  static propTypes = {
    product: PropTypes.object,
    onClick: PropTypes.func
  };

  render() {
    const { product, clicked } = this.props;

    const tag = product.tag ? (
      <div className="product__card__tag ">{product.tag}</div>
    ) : null;

    return (
      <div className="product__card">
        <div className="product__card__img-box">
          <img src={product.img} alt="Item" className="product__card__img" />
          {tag}
          {/* <div className="product__card__like">
          <i class="far fa-heart" />
          </div> */}
        </div>
        <div className="product__card__info">
          {/* <div className="row">
            <div className="col-1-of-2"> */}
          <div className="product__card__title heading-primary--sm heading-primary--sm--light">
            {product.title}
          </div>
          {/* </div> */}
          {/* <div className="col-1-of-2"> */}
          <div className="product__card__price heading-primary--sm">
            NT$ {product.price}
          </div>
        </div>
        {/* </div>
        </div> */}
        <button
          className="btn btn--light heading-primary--medium"
          onClick={() => clicked(product)}
        >
          加到購物車
        </button>
      </div>
    );
  }
}

export default productCard;
