// 我的情报局
import React, { Component } from "react";
import { contactQR } from "../../../request/api";

export default class MineBureau extends Component {
  componentDidMount() {
    this.getContact();
  }
  async getContact() {
    const result = await contactQR();
    console.log(result);
  }
  render() {
    return (
      <div className="public-bureau">
        <p>我的情报局</p>
      </div>
    );
  }
}
