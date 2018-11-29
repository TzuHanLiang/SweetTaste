import React, { Component } from "react";

import OrderSummary from "../../components/Checout/OrderSummary/OrderSummary";
import DeliveryForm from "../../components/Checout/DeliveryForm/DeliveryForm";
import PaymentForm from "../../components/Checout/PaymentForm/PaymentForm";
import InvoiceForm from "../../components/Checout/InvoiceForm/InvoiceForm";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Checkout extends Component {
  state = {
    customer: {
      firstname: null,
      lastname: null
    },
    tel: null,
    email: null,
    address: {
      city: null,
      area: null,
      street: null
    },
    creditcard: null,
    cardowner: {
      firstname: null,
      lastname: null
    },
    duedate: {
      year: null,
      month: null
    },
    securitycode: null,
    invioce: {
      address: {
        city: null,
        area: null,
        street: null
      },
      email: null,
      componytaxid: null
    },
    step: 1
  };

  stepProgressHandler = newStep => {
    this.setState({ step: newStep });
  };

  render() {
    return (
      <div className="checkout">
        <OrderSummary />
        {(() => {
          switch (this.state.step) {
            case 1:
              return <DeliveryForm changeStep={this.stepProgressHandler} />;
            case 2:
              return <PaymentForm changeStep={this.stepProgressHandler} />;
            case 3:
              return <InvoiceForm changeStep={this.stepProgressHandler} />;
            default:
              return <h2>Hmmm...Something went wrong</h2>;
          }
        })()}
      </div>
    );
  }
}
export default Checkout;
