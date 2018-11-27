import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import "./App.css";
import Footer from "./components/Header/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <h1>HI</h1>
            {/* <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/order" component={Order} />
            <Route path="/chechout" component={Checkout} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Footer /> */}
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
