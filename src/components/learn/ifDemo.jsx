import React, { Component } from "react";
import "./test.scss";
// const styles = require('../test.scss');
export default class IfDemo extends Component {
  constructor() {
    super();
    this.state = {
      names: ["iwen", "ime"],
    };
  }
  componentWillMount() {
    // console.log(divStyle)
  }
  render() {
    const { names } = this.state;
    return (
      <div>
        {names.length > 0 ? (
          <ul className={`test-list`}>
            {names.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        ) : (
          <p>数据加载中...</p>
        )}
      </div>
    );
  }
}
