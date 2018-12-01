import React, { Component } from "react";

import CheckoutSummary from "../../../components/Checkout/CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../../../components/Checkout/DeliveryForm/DeliveryForm";
import PaymentForm from "../../../components/Checkout/PaymentForm/PaymentForm";
import InvoiceForm from "../../../components/Checkout/InvoiceForm/InvoiceForm";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    orderForm: {
      name: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "梁"
          },
          elementLabel: "姓氏",
          value: ""
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "紫涵"
          },
          elementLabel: "姓名",
          value: ""
        }
      ],
      tel: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "0989151529"
        },
        elementLabel: "電話",
        value: ""
      },
      address: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "台北市"
          },
          elementLabel: "地址",
          value: ""
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "大安區"
          },
          elementLabel: "地址",
          value: ""
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "幸福路38號"
          },
          value: ""
        }
      ],

      creditCard: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "4073 0112 4518 1143"
        },
        elementLabel: "信用卡號",
        value: ""
      },
      cardOwner: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "梁"
          },
          elementLabel: "持卡人姓名",
          value: ""
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "紫涵"
          },
          elementLabel: "持卡人姓名",
          value: ""
        }
      ],
      dueDate: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "2032"
          },
          elementLabel: "年",
          value: ""
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "03"
          },
          elementLabel: "月",
          value: ""
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
          value: ""
        }
      ],
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "crocodilestear@gmail.com"
        },
        elementLabel: "電子郵件信箱",
        value: ""
      },
      iCityAndArea: [
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "台北市"
          },
          value: ""
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "大安區"
          },
          value: ""
        },
        {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "幸福路三段59號"
          },
          value: ""
        }
      ],

      componyTaxId: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "223100"
        },
        elementLabel: "統一編號",
        value: ""
      }
    },
    step: 1,
    loading: false,
    shippingFee: null
  };
  // componentWillMount will be a better option, because shippingFee is initialized in here, not in the state, componentWillMount is called before the render() and render() is called before the componentDidMount
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

  stepProgressHandler = newStep => {
    this.setState({ step: newStep });
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  inputChangedHandler = (event, inputIdentifier, i) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    let updatedFormElement = null;

    if (i === 0 || i) {
      updatedFormElement = [...updatedOrderForm[inputIdentifier]];
      updatedFormElement[i].value = event.target.value;
    } else {
      updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
      updatedFormElement.value = event.target.value;
    }

    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
    // console.log(updatedOrderForm, { ...this.state.orderForm });
  };

  orderHandler = () => {
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
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
