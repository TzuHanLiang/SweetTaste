import React from "react";
import Input from "../../UI/Input/Input";

const deliveryForm = props => {
  let form = props.formElementsArray.map(formElement => {
    if (formElement.id === "tel") {
      return (
        <div className="checkout__input-box" key={formElement.id}>
          <Input
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.elementLabel}
            show
            // changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        </div>
      );
    } else {
      return (
        <div className="checkout__input-box" key={formElement.id}>
          {formElement.config.map((config, i) =>
            i !== 2 ? (
              <div className="checkout__input-float" key={formElement.id + i}>
                <Input
                  elementType={config.elementType}
                  elementConfig={config.elementConfig}
                  value={config.value}
                  label={config.elementLabel}
                  // changed={event => this.inputChangedHandler(event, formElementid)}
                  show={
                    formElement.id === "cityAndArea" && i === 1 ? false : true
                  }
                />
              </div>
            ) : (
              <Input
                elementType={config.elementType}
                elementConfig={config.elementConfig}
                value={config.value}
                label={config.elementLabel}
                // changed={event => this.inputChangedHandler(event, formElementid)}
                show={
                  formElement.id === "cityAndArea" && i === 1 ? false : true
                }
              />
            )
          )}
        </div>
      );
    }
  });
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
        {/* <div className="checkout__input-box">
          <div className="checkout__input-float">
            <Input elementType="input" label="姓氏" show />
          </div>
          <div className="checkout__input-float">
            <Input elementType="input" label="姓名" show />
          </div>
        </div>
        <div className="checkout__input-box">
          <Input elementType="input" label="電話" show />
        </div>
        <div className="checkout__input-box">
          <div className="checkout__input-float">
            <Input elementType="input" label="地址" show />
          </div>
          <div className="checkout__input-float">
            <Input elementType="input" label="地址" show={false} />
          </div>
          <div className="checkout__input">
            <input
              type="text"
              placeholder="幸福路三段59號"
              id="road"
              className="e-form__control"
            />
          </div>
        </div> */}
        {form}
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
