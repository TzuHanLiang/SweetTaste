import React from "react";

const productMenusList = props => {
  const filters = ["所有甜點", "本日精選", "人氣精選", "新品上市"];
  const menus = filters.map((filter, i) => (
    <button
      key={i}
      onClick={() => props.filter(filter)}
      className="btn btn--light heading-primary--medium"
    >
      {filter}
    </button>
  ));
  return (
    <div className="product__aside ">
      <div className="product__aside__title heading-primary--medium">
        甜點類別
      </div>
      {menus}
    </div>
  );
};

export default productMenusList;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="product__aside">
        <div className="product__aside__title">甜點類別</div>
        <ul className="product__aside__list">
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              所有甜點
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              本日精選
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              人氣精選
            </a>
          </li>
          <li className="product__aside__item">
            <a href="" className="btn  btn--light product__aside__link">
              新品上市
            </a>
          </li>
        </ul>
      </div> */
}
