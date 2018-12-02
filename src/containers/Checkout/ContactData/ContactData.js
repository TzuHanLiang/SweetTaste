import React, { Component } from "react";

import CheckoutSummary from "../../../components/Checkout/CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../../../components/Checkout/DeliveryForm/DeliveryForm";
import PaymentForm from "../../../components/Checkout/PaymentForm/PaymentForm";
import InvoiceForm from "../../../components/Checkout/InvoiceForm/InvoiceForm";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";

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
          valid: false,
          touched: false
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
          valid: false,
          touched: false
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
        valid: false,
        touched: false
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
          valid: false,
          touched: false
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
          valid: false,
          touched: false
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "幸福路38號"
          },
          value: "",
          validation: { required: true },
          valid: false,
          touched: false
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
        valid: false,
        touched: false
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
          valid: false,
          touched: false
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
          valid: false,
          touched: false
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
          valid: false,
          touched: false
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
          valid: false,
          touched: false
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
          valid: false,
          touched: false
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
        valid: true
      }
    },
    step: 1,
    loading: false,
    shippingFee: null
  };

  componentWillMount() {
    // componentDidMount() { //其實沒必要傳值過來, 應該是由用戶的輸入的地址來計算
    const query = new URLSearchParams(this.props.location.search);
    let shippingFee = 0;
    for (let params of query.entries()) {
      if (params[0] === "shippingFee") {
        shippingFee = +params[1];
      }
    }
    this.setState({ shippingFee });
  }

  // 點按進度條可以改變表單的方法
  stepProgressHandler = newStep => {
    this.setState({ step: newStep });
  };

  // 其實只是回上一頁的放大(一個取消訂單的概念)
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  //validation
  checkValidity(value, rules) {
    let validity = {
      isValid: true,
      errorMessage: ""
    };
    if (!rules) {
      return true;
    }

    if (rules.required) {
      validity.isValid = value.trim() !== "" && validity.isValid;
      validity.errorMessage = !validity.isValid ? "此欄位不可為空" : "";
    }

    if (rules.minLength) {
      validity.isValid = value.length >= rules.minLength && validity.isValid;
      validity.errorMessage = !validity.isValid
        ? "長度不可少於" + rules.minLength
        : "";
    }

    if (rules.maxLength) {
      validity.isValid = value.length <= rules.maxLength && validity.isValid;
      validity.errorMessage = !validity.isValid
        ? "長度不可超過" + rules.maxLength
        : "";
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      validity.isValid = pattern.test(value) && validity.isValid;
      validity.errorMessage = !validity.isValid
        ? "請輸入有效的電子郵箱" + rules.maxLength
        : "";
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      validity.isValid = pattern.test(value) && validity.isValid;
      validity.errorMessage = !validity.isValid
        ? "請輸入數字" + rules.maxLength
        : "";
    }

    return validity;
  }

  inputChangedHandler = (event, inputIdentifier, i) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    let updatedFormElement = null;
    let formIsValid = true;

    if (i === 0 || i) {
      //　在做這件事 => (!Array.isArray(updatedOrderForm[inputIdentifier])

      console.log([...updatedOrderForm[inputIdentifier]]);
      updatedFormElement = [...updatedOrderForm[inputIdentifier]];

      updatedFormElement[i].value = event.target.value;
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

    console.log(updatedOrderForm);
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
      price: this.props.totalPrice,
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/checkout-success");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
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
        {/* {console.log(this.props)} */}
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
          shippingFee={this.state.shippingFee}
        />
      </div>
    );
    if (this.state.loading) {
      form = <Spinner />;
      // 可以在這裡做動畫 紙飛機飛出去之類的
    }
    return <>{form}</>;
  }
}
export default ContactData;
