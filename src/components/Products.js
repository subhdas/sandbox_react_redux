import React from "react";
import "./products.css";

const products = (props) => {
  const removeclick = () => {
    console.log("props id remove ", props.id);
    props.click_remove(props.id);
  };
  return (
    <React.Fragment>
      <div className="products_div">
        <div className="products_data">
          <span className="prod_item"> {props.data.name} </span>
          <span className="prod_item"> {props.data.quantity} </span>
        </div>
        <div className="prod_btn_div">
          <button className="prod_btn" onClick={props.click_add}>
            +
          </button>
          <button className="prod_btn" onClick={removeclick}>
            -
          </button>
        </div>
      </div>
      <div className="prod_btn_div"></div>
    </React.Fragment>
  );
};

export default products;
