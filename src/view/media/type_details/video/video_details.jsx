import "./detail_v.scss";
import "../_details_type.scss";
import IconFont from "../../../../comsmine/icon_font";
import ViewMore from "../more_detail/view_more";
import TestImg from "../../../../assets/images/test.png";
import NextReport from "../next_detail/next";
import SourceMap from "../source_map/source";
import store from "../../../../store";
import { MediaDetailsSe } from "../../../../request/api";
import { useEffect, useState } from "react";
import SpinMine from "../../../../comsmine/spin_mine/spin_mine";
import ReactPlayer from "react-player";
const VideoDetail = () => {
  const [videoInfo, setVideoInfo] = useState({});
  let state;
  state = store.getState();
  const storeChange = () => {
    state = store.getState();
  };
  store.subscribe(storeChange);
  const reloadForNext = (_id) => {
    setVideoInfo({});
    getVideoInfo(_id);
  };
  const { read_id } = state;
  const getVideoInfo = async (_id) => {
    const result = await MediaDetailsSe({ id: _id ? _id : read_id });
    setVideoInfo(result);
  };
  useEffect(() => {
    getVideoInfo();
  }, []);
  return (
    <div className="video-detail">
      {!videoInfo.title ? (
        <SpinMine size="large" />
      ) : (
        <div>
          <div className="video-source-box">
            {/* <img src={VideoImg} alt="" />
            <div className="play-btn">
              <IconFont className="iconfont" type="icon-bofang" />
            </div> */}
            {/* <video src={videoInfo.file}></video> */}
            <ReactPlayer
              className="react-player"
              url={videoInfo.file}
              playing={false}
              controls
            />
          </div>
          <div className="video-detail-inner">
            {/* 视频内容 */}
            <div className="video-msg">
              <div style={{ padding: "0 40px" }}>
                <p className="detail-type">视频</p>
                <p className="detail-title">{videoInfo.title}</p>
                {/* 作者信息 */}
                <div className="author-msg">
                  <div className="author-box">
                    <p>
                      作者：
                      <span>{videoInfo.author}</span>
                      <i className="box-point"></i>
                      {videoInfo.publish_time}
                    </p>
                  </div>
                  <div className="msg-box">
                    <IconFont className="iconfont" type="icon-shijian" />
                    <p>阅读时间：{videoInfo.read}分钟</p>
                  </div>
                </div>
                {/* 联系方式 */}
                <SourceMap />
                <div
                  className="book-body"
                  dangerouslySetInnerHTML={{ __html: videoInfo.content }}
                ></div>
              </div>
              {/* 分割线 */}
              <div className="per-line"></div>
              <ViewMore />
            </div>
            {/* 参与者 */}
            <div className="par-box">
              <p className="par-title">参与者</p>
              <p className="per-line"></p>
              {/* 参与者列表 */}
              <div className="par-people">
                <ul>
                  <li>
                    <div className="people-av">
                      <img src={videoInfo.avatar} alt="" />
                    </div>
                    <div className="img-name">
                      <p>{videoInfo.author}</p>
                      <p>
                        <IconFont className="iconfont" type="icon-tuite" />@
                        {videoInfo.twitter_name}
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    <div className="people-av">
                      <img src={TestImg} alt="" />
                    </div>
                    <div className="img-name">
                      <p>周杰伦</p>
                      <p>
                        <IconFont className="iconfont" type="icon-tuite" />
                        @jaychow
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
              {/* 分割线 */}
              <p className="per-line"></p>
              {/* 查看下一篇 */}
              <NextReport
                MediaID={read_id}
                Reload={reloadForNext}
                MediaType={2}
                NextTitle="查看下一篇"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default VideoDetail;
