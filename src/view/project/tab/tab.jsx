import React, { Component } from "react";
import "./tab.scss";
import IconFont from "../../../comsmine/icon_font";
import store from "../../../store";
import {
  setProActiveIndex,
  setProRaceID,
  setRaceList,
  setRaceOpen,
} from "../../../store/app/action_creators";
import { trackList } from "../../../request/api";

export default class ProTab extends Component {
  constructor(props) {
    super(props);
    this.state_nav = {
      tabList: [
        {
          name: "跨链",
          id: 1,
        },
        {
          name: "DEX",
          id: 2,
        },
      ],
    };
    this.state = store.getState();
  }
  UNSAFE_componentWillMount() {
    this.getRaceList();
  }
  componentDidMount() {
    // this.getRaceList();
    store.subscribe(this.storeChange);
  }
  emitRaceID = (_index) => {
    const { setFilterRaceID } = this.props;
    const { race_list } = this.state;
    //更新选中Tab
    const action = setProActiveIndex(_index);
    store.dispatch(action);
    //更新选中Tab - ID
    const action_id = setProRaceID(
      _index == 99 ? _index : race_list[_index].id
    );
    store.dispatch(action_id);
    setFilterRaceID(_index == 99 ? null : race_list[_index].id);
  };
  setActiveTab = (_index) => {
    return _index == this.state.active_tab_pro ? "active-nav-pro" : "";
  };
  //获取赛道列表
  getRaceList = async () => {
    const result = await trackList();
    const action = setRaceList(result);
    store.dispatch(action);
  };
  //订阅Store
  storeChange = () => {
    this.setState(store.getState());
  };
  //点击展开赛道
  moveRaceEv = () => {
    const action = setRaceOpen(this.state.race_open == 1 ? 0 : 1);
    store.dispatch(action);
  };
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  };
  render() {
    const { race_list, race_open } = this.state;
    return (
      <div className="project-tab">
        <div
          className={`all-tab ${this.setActiveTab(99)}`}
          onClick={() => {
            this.emitRaceID(99);
          }}
        >
          全部
          <span className="active-line"></span>
        </div>
        <ul
          ref={this.raceRef}
          className={race_open == 1 ? "no-limit-race" : ""}
        >
          {race_list.map((el, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.emitRaceID(index);
                }}
                className={this.setActiveTab(index)}
              >
                {el.name}
                <span className="active-line"></span>
              </li>
            );
          })}
        </ul>
        {/* 查看更多 */}
        <div
          className={`move-more-race ${race_open == 1 ? "open-more" : ""}`}
          onClick={() => {
            this.moveRaceEv();
          }}
        >
          <IconFont className="iconfont" type="icon-you_right" />
        </div>
      </div>
    );
  }
}
