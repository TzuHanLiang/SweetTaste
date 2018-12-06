import React from "react";

const input = props => {
  let inputElement = null;
  const inputClasses = ["l-registered__form__text"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("l-registered__form__text--invalid");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  //adding error message
  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = <p style={{ color: "#ffb949" }}>{props.errorMessage}</p>;
  }

  return (
    <div className="l-registered__form l-registered__form_small h-flex h-align-content-between h-mb-3">
      <i
        className={["fas l-registered__form__icon"]
          .concat(props.icon)
          .join(" ")}
      />
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
