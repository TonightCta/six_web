import React, { Component } from "react";
import RouterConfig from "./route/router";
import "./assets/css/index.css";
import { Translation } from "react-i18next";
import i18n from "./lang";

export default class App extends Component {
  render() {
    return (
      <Translation>
        {(t) => {
          return (
            <div className="App" style={{overflow:'hidden'}}>
              <RouterConfig/>
            </div>
          );
        }}
      </Translation>
    );
  }
}
