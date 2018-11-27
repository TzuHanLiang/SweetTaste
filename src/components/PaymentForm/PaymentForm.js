import React from "react";

const paymentForm = props => {
  return (
    <div className="p-checkout__form">
      <div className="p-checkout__form__section">
        <div className="p-checkout__form__progress h-flex h-justify-content-between h-align-items-center">
          <h2 className="h-flex-grow-1">付款</h2>
          <ul className="p-checkout__form__progress__steps h-flex h-justify-content-between h-flex-grow-1">
            <li>
              <i className="fas fa-check-circle" />
            </li>
            <li>
              <i className="far fa-dot-circle" />
            </li>
            <li>
              <i className="far fa-circle" />
            </li>
          </ul>
        </div>
        <div className="p-checkout__form__detail h-mb-4">
          <div className="h-flex h-mb-3">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="creditCard">信用卡卡號</label>
              <input
                type="text"
                placeholder="9012-3456-8901-1234"
                id="creditCard"
                className="e-form__control"
              />
            </div>
          </div>
          <div className="h-flex h-mb-3 h-align-items-end">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="firstName">持卡人姓名</label>
              <input
                type="text"
                placeholder="王"
                id="firstName"
                className="e-form__control"
              />
            </div>
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <input
                type="text"
                placeholder="小明"
                id="lastName"
                className="e-form__control"
              />
            </div>
          </div>
          <label className="e-form__singleLabel">有效期限</label>
          <div className="h-flex h-mb-3 h-align-items-end">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <select className="e-form__control">
                <option value="月">月</option>
              </select>
            </div>
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <select className="e-form__control">
                <option value="年">年</option>
              </select>
            </div>
          </div>
          <div className="h-flex h-mb-3">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="last3">背面末三碼</label>
              <input
                type="text"
                placeholder="123"
                id="last3"
                className="e-form__control e-form__control_half"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="checkout-invoice.html"
        className="p-checkout__form__submit h-py-3"
      >
        下一步
      </a>
    </div>
  );
};

export default paymentForm;
