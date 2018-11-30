import React, { Component } from "react";

import OrderSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../../components/Checkout/DeliveryForm/DeliveryForm";
import PaymentForm from "../../components/Checkout/PaymentForm/PaymentForm";
import InvoiceForm from "../../components/Checkout/InvoiceForm/InvoiceForm";

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
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="checkout h-pt-3">
        <OrderSummary checkoutCancel={this.checkoutCancelledHandler} />
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
