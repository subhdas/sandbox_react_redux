import React from "react";

import "./toolbar.css";
import DrawerToggleButton from "./DrawerToggleButton.js";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        {/* <a href="/">THE LOGO</a> */}
        <span> HOME </span>
      </div>
    </nav>
  </header>
);

export default toolbar;
