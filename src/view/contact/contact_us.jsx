import React, { Component } from "react";
import { trackList } from "../../request/api";
import { t } from "i18next";
import "./contact.scss";
import IconFont from "../../comsmine/icon_font";
import ContactForm from "./form/form";

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
        {/* 六一介绍 */}
        <p className="intorduce-text">
          六一资本永远尊重任何有想法的个体及团队，我们也一直在寻找最具创造力和坚韧意志的创业项目。如果您的项目能为整个区块链生态发展助力，目前需要资金或者其他帮助去实现和升级，那么欢迎您提交您的项目介绍。
        </p>
        <p className="intorduce-text m-t-40">
          您可以通过填写下方的表格提交项目的相关信息。我们收到您提交的内容之后就会尽快回复。如果您的时间紧急，也可以通过邮件、推特或者微信直接联系我们官方负责人员。
        </p>
        {/* 提交信息 */}
        <p className="submit-title">
          项目信息
        </p>
        {/* 表单 */}
        <ContactForm/>
      </div>
    );
  }
}
