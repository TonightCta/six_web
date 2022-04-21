import IconFont from "../../comsmine/icon_font";
import "./btn.scss";
import store from "../../store";
import React, { useImperativeHandle, useEffect, useState } from "react";
import { setNavShadow } from "../../store/app/action_creators";
import { useHistory } from "react-router-dom";
import { setSearchVal } from "../../store/app/action_creators";
import { message } from "antd";

const SearchBtn = React.forwardRef((props, ref) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchVal, setSearchValue] = useState("");
  const [showMask, setShowMask] = useState("");
  const [showOpacityMask, setShowOpacityMask] = useState("");
  const history = useHistory();
  let state;
  state = store.getState();
  const storeChange = () => {
    state = store.getState();
  };
  store.subscribe(storeChange);
  const { nav_height } = state;
  useEffect(() => {
    // console.log(props);
  }, []);
  //监听搜索打开状态
  useEffect(() => {
    searchStatus ? setShowMask("show-mask") : setShowMask("");
    setTimeout(() => {
      searchStatus
        ? setShowOpacityMask("show-opacity-mask")
        : setShowOpacityMask("");
    }, 100);
    const action = setNavShadow(searchStatus ? 0 : 1);
    store.dispatch(action);
  }, [searchStatus]);
  //向父组件发射自定义方法
  useImperativeHandle(ref, () => ({
    changeSearch: () => {
      setSearchStatus(searchStatus ? false : true);
    },
  }));
  //搜索
  const searchEv = (code) => {
    const next = () => {
      if (!searchVal) {
        message.error("请输入搜索内容");
        return;
      }
      setSearchStatus(false);
      const action = setSearchVal(searchVal);
      store.dispatch(action);
      history.push("/index/search");
      setSearchValue("");
    };
    code === 13 && next();
  };
  return (
    <div className="search-btn">
      <div
        className="search-content"
        style={{ top: searchStatus ? nav_height + "px" : "-120px" }}
      >
        <p>文章搜索</p>
        <div className="search-inp">
          <input
            type="text"
            placeholder="请输入关键字"
            onKeyDown={(e) => {
              searchEv(e.keyCode);
            }}
            value={searchVal}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <IconFont
            onClick={() => {
              searchEv(13);
            }}
            className="iconfont"
            type="icon-sousuo_search"
          />
        </div>
      </div>
      <div
        className={`search-mask ${showMask} ${showOpacityMask}`}
        // style={{ display: searchStatus ? `block` : "none" }}
        onClick={() => {
          setSearchStatus(false);
        }}
      ></div>
    </div>
  );
});
export default SearchBtn;
