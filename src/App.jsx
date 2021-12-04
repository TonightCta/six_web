import React, { Component } from "react";
import RouterConfig from "./antd/route/router";
import './index.css'

export default class App extends Component {
  change = () => {
    console.log(123);
  };
  render() {
    return (
      <div className="App">
        <RouterConfig />
      </div>
    );
  }
}
