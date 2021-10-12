import React, { Component } from "react";
import { Menu } from "antd";
import "./component.scss";
import IconFont from "./icon_font";
export default class MenuBox extends Component {
  constructor() {
    super();
    this.state = {
      menuList: [
        {
          title: "我的情报局",
          icon: "icon-shouye_home",
          id: 1,
        },
        {
          title: "情报速递",
          icon: "icon-leida_radar",
          id: 2,
        },
        {
          title: "DISCORD专区",
          icon: "icon-qingbaoju_discord",
          id: 3,
        },
        {
          title: "未来事件",
          icon: "icon-jihua_plan",
          id: 4,
        },
        {
          title: "全网提案",
          icon: "icon-pinglun_comments",
          id: 5,
        },
        {
          title: "自选跟踪",
          icon: "icon-dingyue_rss",
          id: 6,
        },
      ],
      collapsed: false, //菜单收缩状态
    };
  }
  toggerCollapese = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { menuList } = this.state;
    const itemStyle = {
        fontSize:14,
        height:48,
        color:'white',
        fontWeight:'bold',
        marginTop:0,
        marginBottom:8
    }
    return (
      /**
       * 菜单列表
       */
      <div className="menu-list">
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          style={{background:'rgba(0,0,0,0)'}}
        >
          {menuList.map((el, index) => {
            return (
              <Menu.Item  key={index} icon={<IconFont style={{fontSize:16,fontWeight:400}} type={el.icon} />} style={itemStyle}>
                {el.title}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}
