import React, { Component } from "react";

import CheckoutSummary from "../../../components/Checkout/CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../../../components/Checkout/DeliveryForm/DeliveryForm";
import PaymentForm from "../../../components/Checkout/PaymentForm/PaymentForm";
import InvoiceForm from "../../../components/Checkout/InvoiceForm/InvoiceForm";

class ContactData extends Component {
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

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    let shippingFee = 0;
    for (let params of query.entries()) {
      if (params[0] === "shippingFee") {
        shippingFee = +params[1];
      }
    }
    this.setState({ shippingFee });
  };

  stepProgressHandler = newStep => {
    this.setState({ step: newStep });
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  orderHandler = () => {};

  render() {
    return (
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
  }
}
export default ContactData;
