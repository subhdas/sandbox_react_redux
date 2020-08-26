import React, { Component, useState } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { login_submit } from "./../store/actions";

const LoginApp = (props) => {
  // const [usernameval, setusername] = useState("loginname");

  const styles = {
    logindiv: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      width: "auto",
      height: "auto",
      top: "50%",
      left: "50%",
      position: "fixed",
      transform: "translate(-50%, -50%)",
      border: "1px solid lightgray",
      borderRadius: "10px",
      fontSize: "1.5em"
    }
  };

  let credential = {
    username: "",
    pass: ""
  };

  const username_change = (e) => {
    e.persist();
    credential.username = e.target.value;
    console.log("usrname change ", e, e.target.value);
  };

  const pass_change = (e) => {
    e.persist();
    credential.pass = e.target.value;
    console.log("pass change ", e, e.target.value);
  };

  const submit_clicked = (e) => {
    e.preventDefault();
    e.persist();
    console.log(
      "submit clicked ",
      credential,
      props.dispatch(login_submit(credential))
    );
  };

  return (
    <div className="login_div" style={styles.logindiv}>
      Add your username password
      <label>Username:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={username_change}
      ></input>
      <br />
      <br />
      <label>Password</label>
      <input type="text" id="lname" name="lname" onChange={pass_change}></input>
      <br />
      <br />
      <input type="submit" value="Submit" onClick={submit_clicked}></input>
    </div>
  );
};

function mapStateToProps(state, props) {
  console.log("mapstate in login page ", state, props);
  return {
    loginaccess: state.login_reducer.login_access
  };
}

export default connect(mapStateToProps, null)(LoginApp);

// export default login_app;
