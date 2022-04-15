import React, { Component } from "react";
import "./list.scss";
import TestImg from "../../../assets/images/test.png";

export default class ProList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { proList } = this.props;
    return (
      <div className="pro-list">
        <ul>
          <li>
            <div className="msg-left">
              <div className="img-box">
                <img src={TestImg} alt="" />
              </div>
              <p>
                <button>网站</button>
                <span className="btn-label"></span>
                <button>推特</button>
              </p>
            </div>
            <div className="msg-right">
              <p className="msg-title">去中心化和自治的跨链流动性网络</p>
              <p className="msg-type">
                <span>基础设施</span>
                <span>企业</span>
              </p>
              <p className="msg-text">
                Helium 正在为数十亿的物联网设备创建一个新的全球网络。该网络由
                Helium Hotspots 提供支持，提供无线覆盖并生成 Helium
                代币。在几分钟内，任何人都可以使用 Helium 的新开放无线协议
                LongFi 设置热点并为低功耗物联网设备提供连接。
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
