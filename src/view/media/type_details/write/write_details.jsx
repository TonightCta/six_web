import IconFont from "../../../../comsmine/icon_font";
import "./detail_w.scss";
import "../_details_type.scss";
import ViewMore from "../more_detail/view_more";
import { useState, useEffect } from "react";
import store from "../../../../store";
import { setDifferent } from "../../../../store/app/action_creators";
import SourceMap from "../source_map/source";
import NextReport from "../next_detail/next";
import { MediaDetailsSe } from "../../../../request/api";
import SpinMine from "../../../../comsmine/spin_mine/spin_mine";
const WriteDetail = () => {
  const [writeDetailInfo, setWriteDetailInfo] = useState({});
  let state;
  state = store.getState();
  const storeChange = () => {
    state = store.getState();
  };
  store.subscribe(storeChange);
  const reloadForNext = (_id) => {
    setWriteDetailInfo({})
    writeInfo(_id);
  }
  const { read_id } = state;
  const writeInfo = async (_id) => {
    const result = await MediaDetailsSe({ id: _id ? _id : read_id });
    setWriteDetailInfo(result);
  };
  const clearDifferent = () => {
    const action = setDifferent(0);
    store.dispatch(action);
  };
  useEffect(() => {
    writeInfo();
    return clearDifferent;
  }, []);
  return (
    <div className="write-detail">
      {!writeDetailInfo.title ? (
        <SpinMine size="large" />
      ) : (
        <div style={{ display: "flex" }}>
          {/* 文章内容 */}
          <div className="detail-content">
            <div style={{ padding: "0 40px" }}>
              <p className="detail-type">写作</p>
              <p className="detail-title">{writeDetailInfo.title}</p>
              {/* 作者信息 */}
              <div className="author-msg">
                <div className="author-box">
                  <p>
                    作者：
                    <span>{writeDetailInfo.author}</span>
                    <i className="box-point"></i>
                    {writeDetailInfo.publish_time}
                  </p>
                </div>
                <div className="msg-box">
                  <IconFont className="iconfont" type="icon-shijian" />
                  <p>阅读时间：{writeDetailInfo.read}分钟</p>
                </div>
              </div>
              {/* 联系方式 */}
              <SourceMap />
              <div
                className="book-body"
                dangerouslySetInnerHTML={{ __html: writeDetailInfo.content }}
              ></div>
            </div>
            {/* 分割线 */}
            <p className="per-line"></p>
            {/* 查看更多 */}
            <ViewMore />
          </div>
          {/* 作者信息 */}
          <div className="author-info">
            <div className="author-msg">
              <div className="av-box">
                <img src={writeDetailInfo.avatar} alt="" />
              </div>
              <p className="author-name">
                {writeDetailInfo.author}
              </p>
              <div className="author-contact-way">
                <IconFont className="iconfont" type="icon-tuite" />
                <p>@{writeDetailInfo.twitter_name}</p>
              </div>
            </div>
            {/* 分割线 */}
            <p className="per-line"></p>
            {/* 阅读下一篇 */}
            <NextReport
              MediaID={read_id}
              Reload={reloadForNext}
              MediaType={0}
              NextTitle="阅读下一篇"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default WriteDetail;
