import React, { Component } from "react";
import { trackList } from "../../request/api";
import { t } from "i18next";
import "./contact.scss";
import IconFont from "../../comsmine/icon_font";

export default class ContactUs extends Component {
  componentDidMount() {
    this.testAxios();
  }
  async testAxios() {
    const result = await trackList();
    // console.log(result);
  }
  render() {
    return (
      <div className="contact-us">
        <div className="contact-title">
          <p className="title-text">联系我们</p>
          <div className="address-box">
            <p className="address-email">
              <IconFont className="iconfont" type="icon-dizhi" />
              <span>invest@sevencapital.com</span>
            </p>
            <p className="out-width-icon">
              <IconFont className="iconfont" type="icon-tuite" />
            </p>
            <p className="out-width-icon">
              <IconFont className="iconfont" type="icon-weixin" />
            </p>
          </div>
        </div>
        
      </div>
    );
  }
}
