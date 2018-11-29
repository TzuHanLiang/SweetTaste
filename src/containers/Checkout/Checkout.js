import React, { Component } from "react";

import OrderSummary from "../../components/OrderSummary/OrderSummary";

import { BrowserRouter as Router, Route } from "react-router-dom";
import DeliveryForm from "../../components/DeliveryFrom/DeliveryForm";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";

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
    }
  };
  deliveryHandler = () => {};
  paymentHandle = () => {};
  invoiceHandle = () => {};
  checkoutHandle = () => {};
  render() {
    return (
      <div className="checkout">
        {/* <Router>
          <Route exact path="/checkout" component={DeliveryForm} />
          <Route exact path="/checkout/payment" component={PaymentForm} />
          <Route exact path="/checkout/invoice" component={InvoiceForm} />
        </Router> */}
        <DeliveryForm />
        <OrderSummary />
      </div>
    );
  }
}
export default Checkout;
