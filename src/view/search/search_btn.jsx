import IconFont from "../../comsmine/icon_font";
import React from "react";
import "./btn.scss";
import store from "../../store";
import { useImperativeHandle, useEffect, useState } from "react";
import { setNavShadow } from "../../store/app/action_creators";

const SearchBtn = React.forwardRef((props, ref) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [showMask, setShowMask] = useState("");
  const [showOpacityMask, setShowOpacityMask] = useState("");
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
  return (
    <div className="search-btn">
      <div
        className="search-content"
        style={{ top: searchStatus ? nav_height + "px" : "-120px" }}
      >
        <p>文章搜索</p>
        <div className="search-inp">
          <input type="text" placeholder="请输入关键字" />
          <IconFont className="iconfont" type="icon-sousuo_search" />
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
