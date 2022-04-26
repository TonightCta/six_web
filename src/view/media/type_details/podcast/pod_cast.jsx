import IconFont from "../../../../comsmine/icon_font";
import "./detail_p.scss";
import ViewMore from "../more_detail/view_more";
import TestImg from "../../../../assets/images/test.png";
import "../_details_type.scss";
import SourceMap from "../source_map/source";
import NextReport from "../next_detail/next";
import store from "../../../../store";
import { MediaDetailsSe } from "../../../../request/api";
import { useState, useEffect } from "react";
import SpinMine from "../../../../comsmine/spin_mine/spin_mine";
const PodcastDetail = () => {
  const [podInfo, setPodInfo] = useState({});
  let state;
  state = store.getState();
  const storeChange = () => {
    state = store.getState();
  };
  store.subscribe(storeChange);
  const reloadForNext = (_id) => {
    setPodInfo({})
    getPodInfo(_id);
  }
  const { read_id } = state;
  const getPodInfo = async (_id) => {
    const result = await MediaDetailsSe({ id: _id ? _id : read_id });
    setPodInfo(result);
  };
  useEffect(() => {
    getPodInfo();
  }, []);
  return (
    <div className="podcast-parent">
      {!podInfo.title ? (
        <SpinMine size="large" />
      ) : (
        <div className="podcast-detail">
          <div className="podcast-header">
            <div className="av-box">
              <img src={podInfo.image} alt="" />
            </div>
            <div className="header-msg">
              <p className="detail-type">播客</p>
              <p className="detail-title">{podInfo.title}</p>
              {/* 作者信息 */}
              <div className="author-msg">
                <div className="author-box">
                  <p>
                    作者：
                    <span>{podInfo.author}</span>
                    <i className="box-point"></i>
                    {podInfo.publish_time}
                  </p>
                </div>
                <div className="msg-box">
                  <IconFont className="iconfont" type="icon-shijian" />
                  <p>阅读时间：{podInfo.read}分钟</p>
                </div>
              </div>
              {/* 联系方式 */}
              <SourceMap />
            </div>
          </div>
          <div className="video-detail-inner">
            {/* 视频内容 */}
            <div className="video-msg">
              <div style={{ padding: "0 40px" }}>
                <div className="book-body" dangerouslySetInnerHTML={{__html:podInfo.content}}>
                  
                </div>
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
                      <img src={podInfo.avatar} alt="" />
                    </div>
                    <div className="img-name">
                      <p>{podInfo.author}</p>
                      <p>
                        <IconFont className="iconfont" type="icon-tuite" />
                        @{podInfo.twitter_name}
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
                MediaType={1}
                NextTitle="收听下一期"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastDetail;
