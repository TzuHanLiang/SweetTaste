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
    const validations = [];
    for (let key in props.shouldValidate) {
      validations.push({
        validate: key,
        requirement: props.shouldValidate[key]
      });
    }
    validations.forEach(validation => {
      switch (validation.validate) {
        case "require":
          validationError = (
            <p className={inputClasses.join(" ")}>此欄位不可為空</p>
          );
          break;
        case "minlength":
          validationError = (
            <p className={inputClasses.join(" ")}>
              長度不可少於{validation.validate["minlength"]}
            </p>
          );
          break;
        default:
          validationError = (
            <p className={inputClasses.join(" ")}>此欄位不可為空</p>
          );
      }
    });

    // validationError = <p>Please enter a valid value!</p>;
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
    </div>
  );
};

export default input;
