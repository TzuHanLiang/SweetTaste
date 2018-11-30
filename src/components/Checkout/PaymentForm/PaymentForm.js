import React from "react";
import { Link } from "react-router-dom";

const paymentForm = props => {
  return (
    <div className="checkout__form">
      <div className="checkout__form-section">
        <div className="checkout__form-title">
          <p className="heading-primary--large">付款</p>
        </div>
        <ul className="checkout__form-progress">
          <li
            onClick={() => props.changeStep(1)}
            className="checkout__progress-step"
          >
            <i className="fas fa-check-circle" />
          </li>
          <li
            onClick={() => props.changeStep(2)}
            className="checkout__progress-step"
          >
            <i className="far fa-dot-circle" />
          </li>
          <li
            onClick={() => props.changeStep(3)}
            className="checkout__progress-step"
          >
            <i className="far fa-circle" />
          </li>
        </ul>
        <div className="checkout__input-box">
          <div className="checkout__input ">
            <label
              className="heading-primary--sm--light--lightest"
              htmlFor="creditCard"
            >
              信用卡卡號
            </label>
            <input
              type="text"
              placeholder="0989151529"
              id="creditCard"
              className="e-form__control"
            />
          </div>
        </div>
        <div className="checkout__input-box">
          <div className="checkout__input checkout__input-float">
            <label
              className="heading-primary--sm--light--lightest"
              htmlFor="firstName"
            >
              持卡人姓名
            </label>
            <input
              type="text"
              placeholder="梁"
              id="firstName"
              className="e-form__control"
            />
          </div>
          <div className="checkout__input checkout__input-float">
            <label
              className="heading-primary--sm--light--lightest"
              htmlFor="firstName"
              style={{ color: "#3F5D45" }}
            >
              姓名
            </label>
            <input
              type="text"
              placeholder="紫涵"
              id="firstName"
              className="e-form__control"
            />
          </div>
        </div>
        <div className="checkout__input-box">
          <div className="checkout__input checkout__input-float">
            <label className="heading-primary--sm--light--lightest">
              有效期限
            </label>
            <input type="text" placeholder="月" className="e-form__control" />
          </div>
          <div className="checkout__input checkout__input-float u-margin-top-sm">
            <input type="text" placeholder="年" className="e-form__control" />
          </div>
          <div className="checkout__input-box">
            <div className="checkout__input checkout__input-float">
              <label className="heading-primary--sm--light--lightest">
                背面末三碼
              </label>
              <input
                type="text"
                placeholder="339"
                className="e-form__control"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => props.changeStep(3)}
        className="btn btn--yellow heading-primary--medium "
      >
        下一步
      </button>
    </div>
  );
};

export default paymentForm;
