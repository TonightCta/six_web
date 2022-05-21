import React, { Component } from "react";
import "./nav.scss";
import IconFont from "../icon_font";
import LogoImg from "../../assets/images/six_one_logo.png";
import { Link, withRouter } from "react-router-dom";
import { t } from "i18next";
import i18n from "../../lang";
import store from "../../store";
import { Dropdown } from "antd";
import MediaMenu from "./media_m/media_menu";
import SearchBtn from "../../view/search/search_btn";
import { MediaDetailsSe } from "../../request/api";
import {
  changeLanguage,
  upNavHeight,
  upActiveNav,
  setNavTitle,
} from "../../store/app/action_creators";
class NavHeader extends Component {
  constructor() {
    super();
    this.state_nav = {
      menu_list: [
        {
          //关于我们
          title: `123${t("menu.about")}`,
          id: 1,
          url: "/about-us",
          is_menu: false,
        },
        {
          //研报
          title: t("menu.report"),
          id: 2,
          url: "/research-report",
          is_menu: false,
        },
        {
          //投资项目
          title: t("menu.project"),
          id: 3,
          url: "/project",
          is_menu: false,
        },
        {
          //媒体
          title: t("menu.media"),
          id: 4,
          url: "/media",
          is_menu: true,
        },
        {
          //联系我们
          title: t("menu.contact"),
          id: 5,
          url: "/contact-us",
          is_menu: false,
        },
      ],
    };
    this.state = store.getState();
    this.scrollTop = 0;
    this.searchRef = React.createRef();
  }
  UNSAFE_componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentDidMount() {
    store.subscribe(this.storeChange);
    const { different_type, read_id } = this.state;
    const getWriteTitle = async () => {
      const result = await MediaDetailsSe({ id: read_id });
      const action = setNavTitle(result.title);
      store.dispatch(action);
    };
    getWriteTitle();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    let action = null;
    switch (nextProps.location.pathname) {
      case "/index/about-us":
        action = upActiveNav(0);
        break;
      case "/index/research-report":
        action = upActiveNav(1);
        break;
      case "/index/project":
        action = upActiveNav(2);
        break;
      case "/index/media":
        action = upActiveNav(3);
        break;
      case "/index/contact-us":
        action = upActiveNav(4);
        break;
      default:
        action = upActiveNav(99);
    }
    store.dispatch(action);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  //切换菜单选中状态
  activeNav = (_index) => {
    return _index == this.state.active_nav ? "active-nav" : "";
  };
  //订阅Store
  storeChange = () => {
    this.setState(store.getState());
  };
  //语言状态保存
  setLanguage = (_lang) => {
    let action = changeLanguage(_lang);
    store.dispatch(action);
    window.location.reload();
  };
  //更新选中菜下标
  changeActive = (_index) => {
    let action = upActiveNav(_index);
    store.dispatch(action);
  };
  //监听页面滚动 - 为导航赋值高度
  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    this.scrollTop = scrollTop;
    const action = upNavHeight(scrollTop >= 50 ? 80 : 120);
    store.dispatch(action);
  };
  setShadow = (bol) => {
    this.isHasShadow = bol;
  };
  render() {
    const { menu_list } = this.state_nav;
    const { different_type, nav_shadow, nav_title } = this.state;
    return (
      <div className="nav-header">
        <div
          className={`nav-header-inner ${
            different_type == 1 && this.scrollTop >= 50 ? "different-nav" : ""
          } ${nav_shadow == 0 ? "hidden-shadow" : ""}`}
          style={{ height: this.state.nav_height + "px" }}
        >
          <div className="tools-left">
            {/* Logo */}
            <img src={LogoImg} alt="" />
            <div className="art-title">
              <div className="art-title-inner">
                <p className="title-line"></p>
                <p>{nav_title}</p>
              </div>
            </div>
          </div>
          <div className="tools-right">
            {/* 导航列表 */}
            <ul>
              {menu_list.map((el, index) => {
                return !el.is_menu ? (
                  <li
                    key={index}
                    onClick={() => {
                      this.changeActive(index);
                    }}
                    className={this.activeNav(index)}
                  >
                    <Link to={`/index${el.url}`}>{el.title}</Link>
                  </li>
                ) : (
                  <Dropdown
                    placement="bottomRight"
                    trigger={["hover"]}
                    key={index}
                    overlay={MediaMenu}
                  >
                    <li className={this.activeNav(index)}>
                      <a href="" style={{ pointerEvents: "none" }}>
                        {el.title}
                      </a>
                    </li>
                  </Dropdown>
                );
              })}
            </ul>
            {/* 多语言切换 */}
            <IconFont
              className="iconfont left-first"
              type="icon-fanyi_translate"
              onClick={() => {
                i18n.changeLanguage(i18n.language === "en" ? "zh-CN" : "en");
                this.setLanguage(i18n.language);
              }}
            />
            {/* 搜索 */}
            <IconFont
              onClick={() => {
                // console.log(this.searchRef.current.searchStatus);
                this.searchRef.current.changeSearch();
              }}
              className="iconfont"
              type="icon-sousuo_search"
            />
          </div>
          {/* 来源列表 */}
          <div className="source-map">
            <div className="map-inner">
              <p>
                <IconFont className="iconfont" type="icon-youjian" />
              </p>
              <p>
                <IconFont className="iconfont" type="icon-weixin" />
              </p>
              <p>
                <IconFont className="iconfont" type="icon-weibo" />
              </p>
              <p>
                <IconFont className="iconfont" type="icon-tuite" />
              </p>
              <p>
                <IconFont className="iconfont" type="icon-lianshu" />
              </p>
              <p>
                <IconFont className="iconfont" type="icon-lianjie" />
              </p>
            </div>
          </div>
        </div>
        <SearchBtn setShadow={this.setShadow} ref={this.searchRef} />
      </div>
    );
  }
}
export default withRouter(NavHeader);
