import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandle = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount() {
      //Now I have to state property already I can simply add new properties. So for that I will simply create a new property on the fly by using this, the this keyword to refer to the class.
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }
    //Now as the name suggests, this is a lifecycle method which is executed at the point of time a component isn't required anymore.
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandle;

// <WrappedComponent {...props} /> is equivalent to React.createElement(WrappedComponent, props, null)

//Now keep in mind, this withErrorHandle function is not a functional component, it's a normal javascript function which expects one argument which then returns a function which qualifies as a functional component, this one here.
