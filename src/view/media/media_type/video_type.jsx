import "./_type.scss";
import IconFont from "../../../comsmine/icon_font";
import VideoImg from "../../../assets/images/video.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import SpinMine from "../../../comsmine/spin_mine/spin_mine";
import { MediaVideo } from "../../../request/api";
import { setReadIDEv } from "../../../store/app/action_fn";
const VideoType = () => {
  const [page, setPage] = useState(1);
  const [listTotal, setListTotal] = useState(0);
  const [listInner, setListInner] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loadStatus, setLoadStatus] = useState(false);
  const getVideoList = async () => {
    const result = await MediaVideo({ page: page, limit: 10 });
    setListTotal(result.total);
    setLastPage(result.last_page);
    setListInner(page == 1 ? result.data : listInner.concat(result.data));
  };
  useEffect(async () => {
    await getVideoList();
    setLoadStatus(false);
  }, [page]);
  return (
    <>
      {listTotal == 0 ? (
        <SpinMine size="large" />
      ) : (
        <div className="video-type">
          <ul>
            {listInner.map((el, index) => {
              return (
                <Link
                  to="/index/video-detail"
                  onClick={() => {
                    setReadIDEv(el.id);
                  }}
                  key={index}
                >
                  <li>
                    <p className="data-type">视频</p>
                    <p className="data-title">{el.title}</p>
                    <div className="video-inner-box">
                      <img src={VideoImg} alt="" />
                      <div className="play-btn">
                        <IconFont className="iconfont" type="icon-bofang" />
                      </div>
                    </div>
                    <p className="data-content">{el.desc}</p>
                    <div className="author-msg">
                      <div className="author-box">
                        <p>
                          作者：
                          <span>{el.author}</span>
                          <i className="box-point"></i>
                          {el.publish_time}
                        </p>
                      </div>
                      <div className="msg-box">
                        <IconFont className="iconfont" type="icon-shijian" />
                        <p>阅读时间：{el.read}分钟</p>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
          {/* 加载更多 */}
          <div className="load-more">
            <button
              onClick={() => {
                setLoadStatus(true);
                if (page == lastPage) {
                  message.error("没有更多了");
                  setLoadStatus(false);
                  return;
                }
                setPage(page + 1);
              }}
            >
              {loadStatus ? (
                <SpinMine size=" " />
              ) : (
                <span>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoType;
