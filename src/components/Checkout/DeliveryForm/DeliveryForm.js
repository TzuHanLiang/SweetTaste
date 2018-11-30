import React from "react";

const deliveryForm = props => {
  return (
    <div className="checkout__form">
      <div className="checkout__form-section">
        <div className="checkout__form-title">
          <p className="heading-primary--large">運送</p>
        </div>
        <ul className="checkout__form-progress">
          <li
            onClick={() => props.changeStep(1)}
            className="checkout__progress-step"
          >
            <i className="far fa-dot-circle" />
          </li>
          <li
            onClick={() => props.changeStep(2)}
            className="checkout__progress-step"
          >
            <i className="far fa-circle" />
          </li>
          <li
            onClick={() => props.changeStep(3)}
            className="checkout__progress-step"
          >
            <i className="far fa-circle" />
          </li>
        </ul>
        <div className="checkout__input-box">
          <div className="checkout__input checkout__input-float">
            <label
              className="heading-primary--sm--light--lightest"
              htmlFor="firstName"
            >
              姓氏
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
          <div className="checkout__input ">
            <label
              className="heading-primary--sm--light--lightest"
              htmlFor="tel"
            >
              電話
            </label>
            <input
              type="text"
              placeholder="0989151529"
              id="tel"
              className="e-form__control"
            />
          </div>
        </div>
        <div className="checkout__input-box">
          <div className="checkout__input checkout__input-float">
            <label className="heading-primary--sm--light--lightest">地址</label>
            <input
              type="text"
              placeholder="台北市"
              className="e-form__control"
            />
          </div>
          <div className="checkout__input checkout__input-float u-margin-top-sm">
            <input
              type="text"
              placeholder="大安區"
              className="e-form__control"
            />
          </div>
          <div className="checkout__input">
            <input
              type="text"
              placeholder="幸福路三段59號"
              id="road"
              className="e-form__control"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => props.changeStep(2)}
        className="btn btn--yellow heading-primary--medium "
      >
        下一步
      </button>
    </div>
  );
};

export default deliveryForm;
