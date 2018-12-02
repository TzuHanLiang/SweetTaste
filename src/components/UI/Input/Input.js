import React from "react";

const input = props => {
  let inputElement = null;
  const inputClasses = ["e-form__control"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("e-form__control--invalid");
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
    <div className="checkout__input">
      <label
        style={props.show ? { color: "#eaf0ed" } : { color: "#3f5d45" }}
        className="heading-primary--sm--light--lightest"
      >
        {props.label}
      </label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
