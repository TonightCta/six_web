import React, { Component } from "react";
import NavHeader from "./comsmine/nav_header";
import MenuSlider from "./comsmine/menu_slider";
import './scss/index.scss'
export default class Index extends Component {
  render() {
    return (
      <div>
        <NavHeader />
        <div className="main-box">
          <div className="menu-main-box">
            <MenuSlider />
          </div>
          <div className="view-box"></div>
        </div>
      </div>
    );
  }
}
