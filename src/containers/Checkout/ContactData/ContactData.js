import React, { Component } from "react";

import CheckoutSummary from "../../../components/Checkout/CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../../../components/Checkout/DeliveryForm/DeliveryForm";
import PaymentForm from "../../../components/Checkout/PaymentForm/PaymentForm";
import InvoiceForm from "../../../components/Checkout/InvoiceForm/InvoiceForm";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: {
      firstname: "",
      lastname: ""
    },
    tel: "",
    email: "",
    address: {
      city: "",
      area: "",
      street: ""
    },
    creditcard: "",
    cardowner: {
      firstname: "",
      lastname: ""
    },
    duedate: {
      year: "",
      month: ""
    },
    securitycode: "",
    invioce: {
      address: {
        city: "",
        area: "",
        street: ""
      },
      email: "",
      componytaxid: ""
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
    let form = (
      <div className="checkout h-pt-3">
        {/* {console.log(this.props)} */}
        <CheckoutSummary
          cart={this.props.cart}
          totalPrice={this.props.totalPrice}
          checkoutCancel={this.checkoutCancelledHandler}
          shippingFee={this.state.shippingFee}
        />
        {(() => {
          switch (this.state.step) {
            case 1:
              return <DeliveryForm changeStep={this.stepProgressHandler} />;
            case 2:
              return <PaymentForm changeStep={this.stepProgressHandler} />;
            case 3:
              return (
                <InvoiceForm
                  changeStep={this.stepProgressHandler}
                  clicked={this.orderHandler}
                />
              );
            default:
              return <h2>Hmmm...Something went wrong</h2>;
          }
        })()}
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
