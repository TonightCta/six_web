import React, { Component } from "react";
import { t } from "i18next";
import store from "../../store";
import "./media.scss";
import MediaVideoRender from "./recommend_type/video";
import MediaFeaturedRender from "./recommend_type/featured";
import MediaWriteRender from "./recommend_type/write";
import MediaPodcastRender from "./recommend_type/podcast";
import FeaturedType from "./media_type/featured_type";
import VideoType from "./media_type/video_type";
import PodcastType from "./media_type/podcast_type";
import WriteType from "./media_type/wtite_type";
import { setMediaType } from "../../store/app/action_creators";

export default class Media extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount = () => {
    store.subscribe(this.storeChange);
  };
  storeChange = () => {
    this.setState(store.getState());
  };
  //获取媒体数据类型
  getMediaTypeList = (_type) => {
    const { media_type } = this.state;
    switch (Number(media_type)) {
      case 1:
        return _type == 0 ? "精选" : <FeaturedType />;
      case 2:
        return _type == 0 ? "写作" : <WriteType />;
      case 3:
        return _type == 0 ? "播客" : <PodcastType />;
      case 4:
        return _type == 0 ? "视频" : <VideoType />;
      default:
        return _type == 0 ? "精选" : <FeaturedType />;
    }
  };
  componentWillUnmount = () => {
    // const action = setMediaType(99);
    // store.dispatch(action);
    this.setState = (state, callback) => {
      return;
    };
  };
  render() {
    const { media_type } = this.state;
    return (
      <div className="media-box">
        {/* 媒体 */}
        <p className="media-title">{this.getMediaTypeList(0)}</p>
        <div className="media-pre-line"></div>
        {/* 内容 */}
        <div className="content-body">
          {/* 列表类型 */}
          <div className="media-list-box">{this.getMediaTypeList(1)}</div>
          {/* 右侧推荐 */}
          <div className="recommend-parent">
            {/* 精选 */}
            {media_type != 1 ? <MediaFeaturedRender /> : ""}
            {/* 写作 */}
            {media_type != 2 ? <MediaWriteRender /> : ""}
            {/* 博客 */}
            {media_type != 3 ? <MediaPodcastRender /> : ""}
            {/* 视频 */}
            {media_type != 4 ? <MediaVideoRender /> : ""}
          </div>
        </div>
      </div>
    );
  }
}
