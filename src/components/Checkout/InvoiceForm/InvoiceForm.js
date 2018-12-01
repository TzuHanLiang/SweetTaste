import Input from "../../UI/Input/Input";
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
    const formElement = this.props.formElementsArray;
    const invoiceInfo = this.state.show ? (
      <div className="checkout__input-box">
        <div className="checkout__input ">
          <Input
            elementType={formElement[0].config.elementType}
            elementConfig={formElement[0].config.elementConfig}
            value={formElement[0].config.value}
            label={formElement[0].config.elementLabel}
            show
            changed={event => this.props.inputChanged(event, formElement[0].id)}
          />
        </div>
      </div>
    ) : (
      <div className="checkout__input-box">
        {formElement[1].config.map((config, i) =>
          i !== 2 ? (
            <div className="checkout__input-float" key={formElement[1].id + i}>
              <Input
                elementType={config.elementType}
                elementConfig={config.elementConfig}
                value={config.value}
                label={config.elementLabel}
                changed={event =>
                  this.props.inputChanged(event, formElement[1].id[i])
                }
                show={
                  formElement[1].id === "cityAndArea" && i === 1 ? false : true
                }
              />
            </div>
          ) : (
            <Input
              key={formElement.id + i}
              elementType={config.elementType}
              elementConfig={config.elementConfig}
              value={config.value}
              label={config.elementLabel}
              changed={event => this.props.inputChanged(event, formElement.id)}
              show={
                formElement[1].id === "cityAndArea" && i === 1 ? false : true
              }
            />
          )
        )}
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
              <Input
                elementType={formElement[2].config.elementType}
                elementConfig={formElement[2].config.elementConfig}
                value={formElement[2].config.value}
                label={formElement[2].config.elementLabel}
                show
                changed={event =>
                  this.props.inputChanged(event, formElement[2].id)
                }
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
