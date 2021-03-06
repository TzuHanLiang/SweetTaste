import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreator from "../../../store/actions/index";

// 負責登出以及re-direct
class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actionCreator.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
