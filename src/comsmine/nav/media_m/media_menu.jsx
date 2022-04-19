import { useState } from "react";
import { Menu } from "antd";
import IconFont from "../../icon_font";
import { Link } from "react-router-dom";
import "./media_menu.scss";
import store from "../../../store";
import { setMediaType } from "../../../store/app/action_creators";

const setMediaHash = (_type) => {
  const action = setMediaType(_type);
  store.dispatch(action);
};

const MediaMenu = () => {
  //   const [media_active, setMediaActive] = useState(99);
  //媒体菜单
  const media_meau = [
    {
      name: "精选",
      type: 1,
      icon: "icon-xingxing_star",
    },
    {
      name: "写作",
      type: 2,
      icon: "icon-baozhizhedie_newspaper-folding",
    },
    {
      name: "播客",
      type: 3,
      icon: "icon-diantai_fm",
    },
    {
      name: "视频",
      type: 4,
      icon: "icon-lunboshipin_carousel-video",
    },
  ];
  let state;
  state = store.getState();
  const storeChange = () => {
    state = store.getState();
  }
  store.subscribe(storeChange);
  return (
    <Menu>
      {media_meau.map((menu, index) => {
        return (
          <Menu.Item
            key={index}
            onClick={() => {
              setMediaHash(menu.type);
            }}
          >
            <Link to="/index/media">
              <div
                className={`media-inner-box ${
                  (index + 1) == state.media_type ? "active-media-type" : ""
                }`}
              >
                <IconFont className="iconfont" type={menu.icon} />
                {menu.name}
              </div>
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MediaMenu;
