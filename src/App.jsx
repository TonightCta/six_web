import React, { Component } from "react";
import Index from "./antd";
import './index.css'

export default class App extends Component {
  change = () => {
    console.log(123);
  };
  render() {
    return (
      <div className="App">
        {/* Hello */}
        <Index />
        {/*
          <State changeSometing = { this.change }/>
          <RefDemo/>
          <Parent>
            <p>我是slot插槽</p>
          </Parent>
        */}
      </div>
    );
  }
}
