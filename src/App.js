// https://github.com/necolas/react-native-web

import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import "./style.css";
import Pres from "./Presentation.js";
import Toolbar from "./components/Toolbar.js";
import SideDrawer from "./components/SideDrawer.js";
import Backdrop from "./components/Backdrop.js";
import Cart from "./components/Cart.js";
import LoginApp from "./components/Login";
// import { GIFShow, Welcome } from "./TestComps.js";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { add_to_cart, remove_from_cart } from "./store/actions";
class App extends Component {
  // constructor() {
  //   super();
  // }

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  add_product_tocart = () => {
    // this.props.actions.add_to_cart("dummy item");
    // this.props.rem_actions.remove_from_cart("hah");

    this.props.dispatch(add_to_cart());
  }; // end of func add_prod_tocart

  remove_product_from_cart = (idval) => {
    console.log(" remove called ", idval);
    this.props.dispatch(remove_from_cart(idval));
  };

  componentDidMount = () => {
    console.log(" APP mounted ", this.state, this.props);
    // this.state["cartdata"] = this.props.state["cartdata"];
    // this.setState({});
    // new comment
  };

  render() {
    let backdrop;

    console.log("rendering app ", this.props);

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (!this.props.loginaccess) return <LoginApp />;

    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          position: "relative",
          width: "100%"
        }}
      >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Cart
          data={this.props.cartdata}
          click_add={this.add_product_tocart}
          click_remove={this.remove_product_from_cart}
        />
      </div>
    );
  }
} // end of class

const styles = StyleSheet.create({});

function mapStateToProps(state, props) {
  console.log("mapstate to props chec", state, props);
  return {
    cartdata: state.cart_reducer.cartdata,
    loginaccess: state.login_reducer.login_access
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ add_to_cart }, dispatch),
    rem_actions: bindActionCreators({ remove_from_cart }, dispatch)
  };
}

export default connect(mapStateToProps, null)(App);
// export default App;
