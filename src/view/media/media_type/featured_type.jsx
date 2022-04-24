import "./_type.scss";
import IconFont from "../../../comsmine/icon_font";
import { Link } from "react-router-dom";
import store from "../../../store";
import { setDifferent } from "../../../store/app/action_creators";
import { setReadIDEv } from "../../../store/app/action_fn";
import { useState, useEffect, useMemo } from "react";
import { MediaFeatured } from "../../../request/api";
import SpinMine from "../../../comsmine/spin_mine/spin_mine";
import { message } from "antd";
const FeaturedType = () => {
  const [page, setPage] = useState(1);
  const [listTotal, setListTotal] = useState(0);
  const [listInner, setListInner] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loadStatus, setLoadStatus] = useState(false);
  const getFeaList = async () => {
    const result = await MediaFeatured({ page: page, limit: 10 });
    setListTotal(result.total);
    setLastPage(result.last_page);
    setListInner(page == 1 ? result.data : listInner.concat(result.data));
  };
  // useMemo(() => {

  // }, [dataList]);
  useEffect(async () => {
    await getFeaList();
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
                  key={index}
                  to="/index/write-detail"
                  onClick={() => {
                    const action = setDifferent(1);
                    store.dispatch(action);
                    setReadIDEv(el.id);
                  }}
                >
                  <li>
                    <p className="data-type">
                      写作
                      <span></span>
                      精选
                    </p>
                    <p className="data-title">{el.title}</p>
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

export default FeaturedType;
