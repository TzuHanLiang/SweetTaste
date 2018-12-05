import React, { Component } from "react";

import CheckoutSummary from "../../../components/Checkout/CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../../../components/Checkout/DeliveryForm/DeliveryForm";
import PaymentForm from "../../../components/Checkout/PaymentForm/PaymentForm";
import InvoiceForm from "../../../components/Checkout/InvoiceForm/InvoiceForm";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionCreator from "../../../store/actions/index";
import { Redirect } from "react-router-dom";

class ContactData extends Component {
  state = {
    // 為了使用客製化input並且使用array.map()的方法製作表單而客製化的資料型態, 利用javascript是dynamic type的優勢, 這個object list 裡面 value 有分object跟array兩種類型, (其實可以全部寫成arry, 之後優化時改)
    orderForm: {
      name: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "梁"
          },
          elementLabel: "姓氏",
          value: "",
          validation: { required: true },
          errorMessage: "此欄位不可為空",
          valid: false
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "紫涵"
          },
          elementLabel: "姓名",
          value: "",
          validation: { required: true },
          errorMessage: "此欄位不可為空",
          valid: false
        }
      ],
      tel: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "0989151529"
        },
        elementLabel: "電話",
        value: "",
        validation: {
          required: true,
          minLength: 10,
          maxLength: 10,
          isNumeric: true
        },
        errorMessage: "請輸入有效的電話號碼",
        valid: false
      },
      address: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "台北市"
          },
          elementLabel: "地址",
          value: "",
          validation: { required: true },
          errorMessage: "此欄位不可為空",
          valid: false
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "大安區"
          },
          elementLabel: "地址",
          value: "",
          validation: { required: true },
          errorMessage: "此欄位不可為空",
          valid: false
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "幸福路38號"
          },
          value: "",
          validation: { required: true },
          errorMessage: "此欄位不可為空",
          valid: false
        }
      ],

      creditCard: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "4073 0112 4518 1143"
        },
        elementLabel: "信用卡號",
        value: "",
        validation: {
          required: true,
          minLength: 12,
          maxLength: 12,
          isNumeric: true
        },
        errorMessage: "請輸入有效的信用卡號",
        valid: false
      },
      cardOwner: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "梁"
          },
          elementLabel: "持卡人姓名",
          value: "",
          validation: { required: true },
          errorMessage: "此欄位不可為空",
          valid: false
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "紫涵"
          },
          elementLabel: "持卡人姓名",
          value: "",
          validation: {
            required: true
          },
          errorMessage: "此欄位不可為空",
          valid: false
        }
      ],
      dueDate: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "2032"
          },
          elementLabel: "有效期限",
          value: "",
          validation: {
            required: true,
            minLength: 4,
            maxLength: 4,
            isNumeric: true
          },
          errorMessage: "請輸入有效的西元年份",
          valid: false
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "03"
          },
          elementLabel: "月",
          value: "",
          validation: {
            required: true,
            minLength: 2,
            maxLength: 2,
            isNumeric: true
          },
          errorMessage: "請輸入有效的月份",
          valid: false
        }
      ],
      securityCode: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "220"
          },
          elementLabel: "背面後三碼",
          value: "",
          validation: {
            required: true,
            minLength: 3,
            maxLength: 3,
            isNumeric: true
          },
          errorMessage: "請輸入有效的安全碼",
          valid: false
        }
      ],
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "crocodilestear@gmail.com"
        },
        elementLabel: "電子郵件信箱",
        value: "",
        validation: {
          isEmail: true
        },
        errorMessage: "請輸入有效的電子郵箱",
        valid: true
      },
      iCityAndArea: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "台北市"
          },
          elementLabel: "地址",
          // 如果沒有定義 validation: {},在checkValidity那裡呼叫 rules.required會出現error, 因為rules is undefined.
          validation: {},
          valid: true
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "大安區"
          },
          elementLabel: "地址",
          value: "",
          validation: {},
          valid: true
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "幸福路三段59號"
          },
          value: "",
          validation: {},
          valid: true
        }
      ],

      componyTaxId: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "22310021"
        },
        elementLabel: "統一編號",
        value: "",
        validation: {
          minLength: 8,
          maxLength: 8,
          isNumeric: true
        },
        errorMessage: "請輸入有效的統一編號",
        valid: true
      }
    },
    step: 1,
    formIsValid: false
  };

  // 點按進度條可以改變表單的方法
  stepProgressHandler = newStep => {
    this.setState({ step: newStep });
  };

  // 其實只是回上一頁(一個取消訂單的概念)
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  //validation
  checkValidity(value, rules) {
    // 如果沒有定義validation就直接turn true,(雙重保險, 因為在orderform裡面已經定義empty validation object了)
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

  inputChangedHandler = (event, inputIdentifier, i) => {
    let updatedOrderForm = {
      ...this.state.orderForm
    };

    // object 裡面的object 或是array也要複製一份新的 (寫法看起來很帥但並不好閱讀且容易出錯, 之後優化時需要改進的部份)
    for (let key in updatedOrderForm) {
      updatedOrderForm = {
        ...updatedOrderForm,
        key: Array.isArray(updatedOrderForm[key])
          ? [...updatedOrderForm[key]].map(element => {
              return {
                ...element,
                elementConfig: { ...element["elementConfig"] },
                validation: { ...element["validation"] }
              };
            })
          : {
              ...updatedOrderForm[key],
              elementConfig: { ...updatedOrderForm[key]["elementConfig"] },
              validation: { ...updatedOrderForm[key]["validation"] }
            }
      };
    }

    let updatedFormElement = null;
    let formIsValid = true;

    if (i === 0 || i) {
      //　在做這件事 => (!Array.isArray(updatedOrderForm[inputIdentifier])

      //(下面是在研究redux時, 發現的錯誤)
      //-------------------------------------------------------------------------
      // 因為這裡的updatedFormElement是 list of object, 我原來的寫法是直接利用spread operator複製的array去改裡面的物件的值, 但是裡面的物件還是只向舊的物件, 所以當我這樣改的時候已經mutate到舊的物件了, 所以改成下面新的寫法.

      //new way to update the input value to my formelement in an immutable way
      updatedFormElement = [...updatedOrderForm[inputIdentifier]].map(
        (element, index) => {
          if (index !== i) {
            // 這個 i 是從被輸入的input回傳回來的, 對應該input在orderform裡面FormElements的index,
            // 所以 This isn't the item I care about - keep it as-is
            return element;
          }
          // this is the one I want - return an updated value
          return { ...element, value: event.target.value };
        }
      );

      // this is the old way I've done, 裡面的object還是指向舊的object, 所以當我這樣改的時候就已經動到舊的資料了, this is bad.
      // updatedFormElement = [...updatedOrderForm[inputIdentifier]];
      // updatedFormElement[i].value = event.target.value;
      //-------------------------------------------------------------------------

      // check validation
      updatedFormElement[i].valid = this.checkValidity(
        updatedFormElement[i].value,
        updatedFormElement[i].validation
      );
      updatedFormElement[i].touched = true;
    } else {
      updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
      updatedFormElement.value = event.target.value;
      // check validation
      updatedFormElement.valid = this.checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation
      );
      updatedFormElement.touched = true;
    }

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    for (let inputIdentifier in updatedOrderForm) {
      if (Array.isArray(updatedOrderForm[inputIdentifier])) {
        // 判斷updatedOrderForm[inputIdentifier]是array的話,裡面每一個object的valid === true, formIsValid才 ===true
        formIsValid = updatedOrderForm[inputIdentifier].reduce(
          (accumulator, currentValue) =>
            (accumulator = accumulator && currentValue),
          true
        );
      } else {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  // 把資料push到firebase之前把key 跟 input value取出來, 因為config data不需要傳到資料庫
  orderHandler = () => {
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      if (Array.isArray(this.state.orderForm[formElementIdentifier])) {
        formData[formElementIdentifier] = this.state.orderForm[
          formElementIdentifier
        ]
          .map(i => i.value)
          .join("/");
      } else {
        formData[formElementIdentifier] = this.state.orderForm[
          formElementIdentifier
        ].value;
      }
    }
    const order = {
      products: this.props.cart,
      price: this.props.totalPrice + this.props.shippingFee,
      orderData: formData
    };
    this.props.onOrderProducts(order);
  };

  render() {
    const purchasedRedirect = this.props.purchased ? (
      <Redirect to="/checkout-success" />
    ) : null;
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    const deliveryForm = formElementsArray.slice(0, 3);
    const paymentForm = formElementsArray.slice(3, 7);
    const invoiceForm = [...formElementsArray].splice(7, 4);
    let form = (
      <div className="checkout h-pt-3">
        {purchasedRedirect}
        {(() => {
          switch (this.state.step) {
            case 1:
              return (
                <DeliveryForm
                  formElementsArray={deliveryForm}
                  inputChanged={this.inputChangedHandler}
                  changeStep={this.stepProgressHandler}
                />
              );
            case 2:
              return (
                <PaymentForm
                  formElementsArray={paymentForm}
                  inputChanged={this.inputChangedHandler}
                  changeStep={this.stepProgressHandler}
                />
              );
            case 3:
              return (
                <InvoiceForm
                  formElementsArray={invoiceForm}
                  inputChanged={this.inputChangedHandler}
                  changeStep={this.stepProgressHandler}
                  clicked={this.orderHandler}
                  orderable={this.state.formIsValid && this.props.cart.length}
                />
              );
            default:
              return <h2>Hmmm...Something went wrong</h2>;
          }
        })()}
        <CheckoutSummary
          cart={this.props.cart}
          totalPrice={this.props.totalPrice}
          checkoutCancel={this.checkoutCancelledHandler}
          shippingFee={this.props.shippingFee}
        />
      </div>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return <>{form}</>;
  }
}

// NOTE: mapStateToProps holds a function which receives the state automatically and which returns a javascript object where we define which property should hold which slice of the state.
const mapStateToProps = state => {
  return {
    cart: state.products.cart,
    totalPrice: state.products.totalPrice,
    shippingFee: state.products.shippingFee,
    loading: state.order.loading,
    purchased: state.order.purchased
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderProducts: order => dispatch(actionCreator.purchaseProducts(order))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
