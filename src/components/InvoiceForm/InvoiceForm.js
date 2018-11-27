import React from "react";

const invoiceForm = props => {
  return (
    <div className="p-checkout__form">
      <div className="p-checkout__form__section">
        <div className="p-checkout__form__progress h-flex h-justify-content-between h-align-items-center">
          <h2 className="h-flex-grow-1">發票</h2>
          <ul className="p-checkout__form__progress__steps h-flex h-justify-content-between h-flex-grow-1">
            <li>
              <i className="fas fa-check-circle" />
            </li>
            <li>
              <i className="fas fa-check-circle" />
            </li>
            <li>
              <i className="far fa-dot-circle" />
            </li>
          </ul>
        </div>
        <ul className="p-checkout__form__btnGroup h-flex h-mb-4">
          <li className="h-flex-grow-1">
            <a href="#" className="h-py-2 p-checkout__form__btnGroup_active">
              電子發票
            </a>
          </li>
          <li className="h-flex-grow-1">
            <a href="#" className="h-py-2">
              郵寄發票
            </a>
          </li>
        </ul>
        <div className="p-checkout__form__detail h-mb-4">
          <div className="h-flex h-mb-3">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="email">電子郵件信箱</label>
              <input
                type="text"
                placeholder="example@gmail.com"
                id="email"
                className="e-form__control"
              />
            </div>
          </div>
          <div className="h-flex h-mb-3">
            <div className="e-form__group h-px-1 h-flex-grow-1">
              <label for="taxID">統一編號</label>
              <input
                type="text"
                placeholder="34856393"
                id="taxID"
                className="e-form__control"
              />
            </div>
          </div>
        </div>
      </div>
      <a href="index.html" className="p-checkout__form__submit h-py-3">
        確認結帳
      </a>
    </div>
  );
};

export default invoiceForm;
