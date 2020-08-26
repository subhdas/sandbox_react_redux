import React from "react";

import "./sidedrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li> products </li>
        <li> about </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
