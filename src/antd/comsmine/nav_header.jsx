import React, { Component } from "react";
import "./component.scss";
import IconFont from './icon_font';

export default class NavHeader extends Component {
  render() {
    return (
      <div className="nav-header">
        <div className="tools-left">
          <IconFont className="iconfont" type="icon-zhankaicaidan1_menu-unfold-one"></IconFont>
          <p>自选跟踪</p>
        </div>
        <div className="tools-right">
          <p className="qr-box">
            <IconFont className="iconfont" type="icon-fukuanma_pay-code-one"></IconFont>
            <span className="qr-line"></span>
          </p>
          <p className="uid-box">
            <IconFont className="iconfont" type="icon-bianhao_id"></IconFont>
            UID:<span>517982</span>
          </p>
        </div>
      </div>
    );
  }
};
