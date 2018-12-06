import React, { Component } from "react";
import { connect } from "react-redux";
import facebook from "../../assets/img/ic-facebook-logotype.svg";
import google from "../../assets/img/ic-google.svg";
import yahoo from "../../assets/img/ic-yahoo.svg";
import Input from "../../components/UI/Input/AuthInput";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actionCreator from "../../store/actions/index";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "電子信箱/手機號碼"
        },
        icon: "fa-user",
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        errorMessage: "請輸入有效的電子郵箱",
        valid: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "請輸入使用者密碼"
        },
        icon: "fa-key",
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        errorMessage: "密碼不正確",
        valid: true
      }
    },
    isSignup: true
  };
  //validation
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updateControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updateControls });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  switchModeHandler = () => {
    this.setState(preState => {
      return { isSignup: !preState.isSignup };
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = (
      <>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
            icon={formElement.config.icon}
          />
        ))}
      </>
    );

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p
          className="heading-primary--medium"
          style={{
            textAlign: "center",
            backgroundColor: "#ffb949"
          }}
        >
          {this.props.error.message}
        </p>
      );
    }
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div className="col-container">
            {errorMessage}
            <div className="p-login col-row">
              <form className="p-login__account" onSubmit={this.submitHandler}>
                <div className="p-login__account__block">
                  <h2 className="p-login__account__block__title">
                    {this.state.isSignup ? "會員登入" : "會員註冊"}
                  </h2>
                  <ul className="p-login__community__list h-md-flex h-p-md-4 h-none">
                    <li>
                      <a href="#">
                        <img
                          style={{ width: "108px", height: "20px" }}
                          src={facebook}
                          alt="facebook"
                        />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <img
                          src={google}
                          style={{ width: "95px", height: "20px" }}
                          alt="google"
                        />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <img
                          src={yahoo}
                          style={{ width: "97px", height: "23px" }}
                          alt="yahoo"
                        />
                      </a>
                    </li>
                  </ul>
                  <div className="h-m-md-4">
                    {form}
                    <div className="h-flex">
                      <div className="p-login__account__block__checkbox h-mb-3 h-flex-grow-1">
                        <input type="checkbox" id="check" />
                        <label style={{ fontSize: "16px" }} htmlFor="check">
                          {" "}
                          記住我
                        </label>
                      </div>
                      <div className="h-flex">
                        <label className="switch">
                          <input
                            type="checkbox"
                            onClick={this.switchModeHandler}
                          />
                          <span className="slider" />
                        </label>
                        <span
                          style={{
                            marginLeft: "5px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        >
                          {this.state.isSignup
                            ? "還沒有帳號嗎 ? "
                            : "改用帳號登入"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  style={{ textDecoration: "none" }}
                  className="p-login__account__submit btn btn--yellow heading-primary--medium"
                >
                  登入帳號
                </button>
              </form>
              <div className="p-login__community h-md-none">
                <h2 className="p-login__community__title">
                  —— 連結社群帳號 ——
                </h2>
                <ul className="p-login__community__list h-md-flex">
                  <li className="h-mb-3">
                    {" "}
                    <a href="/">
                      <img
                        src={facebook}
                        style={{ width: "108px", height: "20px" }}
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li className="h-mb-3">
                    {" "}
                    <a href="#">
                      <img
                        src={google}
                        style={{ width: "95px", height: "20px" }}
                        alt="google"
                      />
                    </a>
                  </li>
                  <li className="h-mb-3">
                    {" "}
                    <a href="#">
                      <img
                        src={yahoo}
                        style={{ width: "97px", height: "23px" }}
                        alt="yahoo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actionCreator.auth(email, password, isSignup))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="l-registered__form l-registered__form_small h-flex h-align-content-between h-mb-3">
<i className="fas fa-user l-registered__form__icon" />
<input
  type="text"
  placeholder="電子信箱/手機號碼"
  className="l-registered__form__text"
/>
</div>
<div className="l-registered__form l-registered__form_small h-flex h-align-content-between h-mb-3">
<i className="fas fa-key l-registered__form__icon" />
<input
  type="text"
  placeholder="請輸入使用者密碼"
  className="l-registered__form__text"
/>
</div> */
}
