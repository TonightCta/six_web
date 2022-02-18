import React, { Component } from "react";
import RouterConfig from "./route/router";
import "./assets/css/index.css";
import { Translation } from "react-i18next";

export default class App extends Component {
  change = () => {
    console.log(123);
  };
  render() {
    return (
      <Translation>
        {(t) => {
          return (
            <div className="App">
              <RouterConfig />
            </div>
          );
        }}
      </Translation>
    );
  }
}
