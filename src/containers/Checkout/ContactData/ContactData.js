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
      firstname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "梁"
        },
        value: ""
      },
      lastname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "紫涵"
        },
        value: ""
      },
      tel: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "0989151529"
        },
        value: ""
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "台北市"
        },
        value: ""
      },
      area: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "大安區"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "幸福路38號"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "crocodilestear@gmail.com"
        },
        value: ""
      },
      creditcard: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "4073 0112 4518 1143"
        },
        value: ""
      },
      cardOwnerFN: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "梁"
        },
        value: ""
      },
      cardOwnerLN: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "紫涵"
        },
        value: ""
      },
      dueDateY: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "2032"
        },
        value: ""
      },
      dueDateM: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "03"
        },
        value: ""
      },
      securityCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "220"
        },
        value: ""
      },
      iCity: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "台北市"
        },
        value: ""
      },
      iArea: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "大安區"
        },
        value: ""
      },
      iStreet: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "幸福路三段59號"
        },
        value: ""
      },
      iEmail: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "crocodilestear@gmail.com"
        },
        value: ""
      },
      componyTaxId: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "223100"
        },
        value: ""
      }
    },
    step: 1,
    loading: false,
    shippingFee: null
  };
  // componentWillMount will be a better option, because shippingFee is initialized in here, not in the state, componentWillMount is called before the render() and render() is called before the componentDidMount
  componentWillMount() {
    // componentDidMount() {
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

  orderHandler = () => {
    this.setState({ loading: true });
    const order = {
      products: this.props.cart,
      price: this.props.totalPrice,
      customer: {
        name: {
          firstname: "梁",
          lastname: "紫涵"
        },
        tel: "0989151529",
        email: "crocodilestear@gmail.com",
        address: {
          city: "台北市",
          area: "大安區",
          street: "幸福路38號"
        },
        creditcard: "4073 0112 4518 1143",
        cardowner: {
          firstname: "梁",
          lastname: "紫涵"
        },
        duedate: {
          year: "2032",
          month: "03"
        },
        securitycode: "220",
        invioce: {
          address: {
            city: null,
            area: null,
            street: null
          },
          email: "crocodilestear@gmail.com",
          componytaxid: "223100"
        }
      }
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
    const deliveryForm = formElementsArray.slice(0, 6);
    const paymentForm = formElementsArray.slice(6, 12);
    const invoiceForm = [...formElementsArray].splice(0, 12);
    let form = (
      <div className="checkout h-pt-3">
        {/* {console.log(this.props)} */}
        {(() => {
          switch (this.state.step) {
            case 1:
              return (
                <DeliveryForm
                  formElementsArray={deliveryForm}
                  changeStep={this.stepProgressHandler}
                />
              );
            case 2:
              return (
                <PaymentForm
                  formElementsArray={paymentForm}
                  changeStep={this.stepProgressHandler}
                />
              );
            case 3:
              return (
                <InvoiceForm
                  formElementsArray={invoiceForm}
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
