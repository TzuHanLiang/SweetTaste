import React, { Component } from "react";

class invoiceForm extends Component {
  state = {
    show: true
  };
  showEmail = () => {
    this.setState({ show: true });
  };
  showAddress = () => {
    this.setState({ show: false });
  };
  render() {
    const invoiceInfo = this.state.show ? (
      <div className="checkout__input-box">
        <div className="checkout__input ">
          <label
            className="heading-primary--sm--light--lightest"
            htmlFor="email"
          >
            電子郵件信箱
          </label>
          <input
            type="text"
            placeholder="example@gmail.com"
            id="email"
            className="e-form__control"
          />
        </div>
      </div>
    ) : (
      <div className="checkout__input-box">
        <div className="checkout__input checkout__input-float">
          <label className="heading-primary--sm--light--lightest">地址</label>
          <input type="text" placeholder="台北市" className="e-form__control" />
        </div>
        <div className="checkout__input checkout__input-float ">
          <label
            style={{ color: "#3f5d45" }}
            className="heading-primary--sm--light--lightest"
          >
            地址
          </label>
          <input type="text" placeholder="大安區" className="e-form__control" />
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
    );
    return (
      <div className="checkout__form">
        <div className="checkout__form-section">
          <div className="checkout__form-title">
            <p className="heading-primary--large">發票</p>
          </div>
          <ul className="checkout__form-progress">
            <li
              onClick={() => this.props.changeStep(1)}
              className="checkout__progress-step"
            >
              <i className="fas fa-check-circle" />
            </li>
            <li
              onClick={() => this.props.changeStep(2)}
              className="checkout__progress-step"
            >
              <i className="fas fa-check-circle" />
            </li>
            <li
              onClick={() => this.props.changeStep(3)}
              className="checkout__progress-step"
            >
              <i className="far fa-dot-circle" />
            </li>
          </ul>
          <div className="checkout__form__btnGroup u-margin-bottom-big">
            <button
              className="btn heading-primary--sm--light--lightest "
              onClick={this.showEmail}
              style={{
                backgroundColor: this.state.show ? "#EAF0ED" : "#3F5D45",
                color: this.state.show ? "#3F5D45" : "#EAF0ED"
              }}
            >
              電子發票
            </button>
            <button
              className="btn heading-primary--sm--light--lightest "
              onClick={this.showAddress}
              style={{
                color: this.state.show ? "#EAF0ED" : "#3F5D45",
                backgroundColor: this.state.show ? "#3F5D45" : "#EAF0ED"
              }}
            >
              郵寄發票
            </button>
          </div>
          {invoiceInfo}
          <div className="checkout__input-box">
            <div className="checkout__input ">
              <label
                className="heading-primary--sm--light--lightest"
                htmlFor="taxID"
              >
                統一編號
              </label>
              <input
                type="text"
                placeholder="34856393"
                id="taxID"
                className="e-form__control"
              />
            </div>
          </div>
        </div>
        <button
          onClick={this.props.clicked}
          className="btn btn--yellow heading-primary--medium "
        >
          確認結帳
        </button>
      </div>
    );
  }
}

export default invoiceForm;
