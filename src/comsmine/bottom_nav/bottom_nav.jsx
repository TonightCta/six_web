import React, { Component } from "react";
import WhiteLog from "../../assets/images/logo_white.png";
import { t } from "i18next";
import IconFont from "../icon_font";
import "./bottom_nav.scss";

export default class FooterNav extends Component {
  constructor() {
    super();
    this.nav_ist = {
      list: [
        {
          //关于我们
          title: t("menu.about"),
          id: 1,
          url: "/about-us",
        },
        {
          //研报
          title: t("menu.report"),
          id: 2,
          url: "/research-report",
        },
        {
          //投资项目
          title: t("menu.project"),
          id: 3,
          url: "/project",
        },
        {
          //媒体
          title: t("menu.media"),
          id: 4,
          url: "/media",
        },
        {
          //联系我们
          title: t("menu.contact"),
          id: 5,
          url: "/contact-us",
        },
      ],
    };
  }
  render() {
    const { list } = this.nav_ist;
    return (
      <div className="bottom-nav">
        <div className="nav-content">
          {/* Logo && 菜单 */}
          <div className="logo-list">
            <img src={WhiteLog} alt="" />
            <div className="bottom-list">
              <ul>
                {list.map((el, index) => {
                  return <li key={index}>{el.title}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="seg-line"></div>
          {/* 与我们联系 */}
          <div className="contact-us-footer">
            <p>{t("footer_nav.contact_us")}</p>
            <p>invest@sevencapital.com</p>
          </div>
          {/* 外部链接 && Company */}
          <div className="website-com">
            <div className="website-box">
              <p>
                <IconFont className="iconfont" type="icon-tuite" />
              </p>
              <p>
                <IconFont className="iconfont" type="icon-weixin" />
              </p>
            </div>
            <p className="company-msg">
              ©2022 Seven Capital. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
