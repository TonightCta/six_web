import React, { Component } from 'react';

export default class Rmb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        人民币:{this.props.price}
      </div>
    )
  }
}
