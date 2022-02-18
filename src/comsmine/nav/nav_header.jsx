import React, { Component } from "react";
import "./nav.scss";
import IconFont from "../icon_font";
import LogoImg from "../../assets/images/firstlogo_red.png";
import { Link } from "react-router-dom";
import { t } from "i18next";
import i18n from "../../lang";

export default class NavHeader extends Component {
  constructor() {
    super();
    this.state = {
      menu_list: [
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
      //选中菜单
      active_nav: 0,
    };
  }
  //切换菜单选中状态
  activeNav(_index) {
    return _index === this.state.active_nav ? "active-nav" : "";
  }
  render() {
    const { menu_list } = this.state;

    return (
      <div className="nav-header">
        <div className="tools-left">
          {/* Logo */}
          <img src={LogoImg} alt="" />
        </div>
        <div className="tools-right">
          {/* 导航列表 */}
          <ul>
            {menu_list.map((el, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    this.setState({ active_nav: index });
                  }}
                  className={this.activeNav(index)}
                >
                  <Link to={`/index${el.url}`}>{el.title}</Link>
                </li>
              );
            })}
          </ul>
          {/* 多语言 */}
          <IconFont
            className="iconfont left-first"
            type="icon-guojihua_international"
            onClick={() => {
              i18n.changeLanguage(i18n.language === "en" ? "zh-CN" : "en");
            }}
          />
          {/* 搜索 */}
          <IconFont className="iconfont" type="icon-sousuo_search" />
        </div>
      </div>
    );
  }
}
