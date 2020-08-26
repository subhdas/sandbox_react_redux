import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Products from "./Products";
import "./cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {};

  render() {
    let data = this.props.data.products;
    console.log(" checking data at carts ", this.props, data);
    let products = data.map((m, i) => {
      return (
        <Products
          data={m}
          id={m.id}
          key={m.id}
          click_add={this.props.click_add}
          click_remove={this.props.click_remove}
        />
      );
    });
    return (
      <div className="cart_div_container">
        <div className="header_cart">SHOPPING CART</div>
        {products}
      </div>
    );
  }
} // end of class componennt

const styles = StyleSheet.create({});

//for REDUX
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);

export default Cart;
