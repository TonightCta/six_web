import React, { Component } from "react";
import { ContactInfo } from "../../request/api";
import { t } from "i18next";
import "./contact.scss";
import IconFont from "../../comsmine/icon_font";
import ContactForm from "./form/form";
import SpinMine from "../../comsmine/spin_mine/spin_mine";

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      infoMsg: {},
    };
  }
  componentDidMount() {
    this.getContactInfo();
  }
  async getContactInfo() {
    const result = await ContactInfo();
    console.log(result);
    this.setState({
      infoMsg: result,
    });
  }
  render() {
    const { infoMsg } = this.state;
    return (
      <div className="contact-us">
        <div className="contact-title">
          <p className="title-text">联系我们</p>
          <div className="address-box">
            <div className="address-email">
              <IconFont className="iconfont" type="icon-dizhi" />
              {
                !infoMsg.addr ? <SpinMine size="small"/> : <span>{infoMsg.addr}</span>
              }
            </div>
            <p className="out-width-icon">
              <a target="_blank" href={`https://twitter.com/${infoMsg.twitter}`}>
                <IconFont className="iconfont" type="icon-tuite" />
              </a>
            </p>
            <p className="out-width-icon">
              <a href={`mailto:${infoMsg.email}`}>
                <IconFont className="iconfont" type="icon-youjian" />
              </a>
            </p>
          </div>
        </div>
        {/* 六一介绍 */}
        <div className="intorduce-box">
          {!infoMsg.desc ? (
            <SpinMine size="large" />
          ) : (
            <p className="intorduce-text">{infoMsg.desc}</p>
          )}
        </div>

        {/* 提交信息 */}
        <p className="submit-title">项目信息</p>
        {/* 表单 */}
        <ContactForm />
      </div>
    );
  }
}
