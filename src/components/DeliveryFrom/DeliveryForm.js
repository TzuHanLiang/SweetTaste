import React from "react";

const deliveryForm = props => {
  return (
    <div className="p-checkout__form">
      <div className="p-checkout__form__section">
        <div className="p-checkout__form__progress h-flex h-justify-content-between h-align-items-center">
          <h2 className="h-flex-grow-1">運送</h2>
          <ul className="p-checkout__form__progress__steps h-flex h-justify-content-between h-flex-grow-1">
            <li>
              <i className="far fa-dot-circle" />
            </li>
            <li>
              <i className="far fa-circle" />
            </li>
            <li>
              <i className="far fa-circle" />
            </li>
          </ul>
        </div>
        <div className="p-checkout__form__detail h-mb-4">
          <div className="h-flex h-mb-3">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="firstName">姓氏</label>
              <input
                type="text"
                placeholder="王"
                id="firstName"
                className="e-form__control"
              />
            </div>
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="lastName">姓氏</label>
              <input
                type="text"
                placeholder="小明"
                id="lastName"
                className="e-form__control"
              />
            </div>
          </div>
          <div className="h-flex h-mb-3">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="tel">電話</label>
              <input
                type="text"
                placeholder="0977-333-111"
                id="tel"
                className="e-form__control"
              />
            </div>
          </div>
          <div className="h-flex h-mb-2 h-align-items-end">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label>地址</label>
              <input
                type="text"
                placeholder="台北市"
                className="e-form__control"
              />
            </div>
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <input
                type="text"
                placeholder="大安區"
                className="e-form__control"
              />
            </div>
          </div>
          <div className="h-flex">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <input
                type="text"
                placeholder="幸福路三段59號"
                id="road"
                className="e-form__control"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="checkout-payment.html"
        className="p-checkout__form__submit h-py-3"
      >
        下一步
      </a>
    </div>
  );
};

export default deliveryForm;
