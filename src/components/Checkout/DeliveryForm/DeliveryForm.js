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
            label={formElement.config.elementLabel}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => props.inputChanged(event, formElement.id)}
            errorMessage={formElement.config.errorMessage}
            show
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
                  invalid={!config.valid}
                  shouldValidate={config.validation}
                  touched={config.touched}
                  label={config.elementLabel}
                  changed={event =>
                    props.inputChanged(event, formElement.id, i)
                  }
                  errorMessage={config.errorMessage}
                  show={formElement.id === "address" && i === 1 ? false : true}
                />
              </div>
            ) : (
              <Input
                key={formElement.id + i}
                elementType={config.elementType}
                elementConfig={config.elementConfig}
                value={config.value}
                invalid={!config.valid}
                shouldValidate={config.validation}
                touched={config.touched}
                errorMessage={config.errorMessage}
                changed={event => props.inputChanged(event, formElement.id, i)}
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
