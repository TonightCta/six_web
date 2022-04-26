import IconFont from "../../comsmine/icon_font";
import "./result.scss";
import store from "../../store";
import "../media/media_type/_type.scss";
import { Link } from "react-router-dom";
import { setDifferent, setSearchVal } from "../../store/app/action_creators";
import MediaFeatured from "../media/recommend_type/featured";
import { useState, useEffect, useMemo } from "react";
import { setReadIDEv } from "../../store/app/action_fn";
import { SearchAll } from "../../request/api";
import SpinMine from "../../comsmine/spin_mine/spin_mine";
import { useDebounce } from "../../util/hook";

const SearchResult = () => {
  const [searchValInner, setSearchValInner] = useState("");
  const [isClear, setIsClear] = useState(false);
  const [resultList, setResultList] = useState([]);
  let state;
  state = store.getState();
  const storeChange = () => {
    state = store.getState();
  };
  store.subscribe(storeChange);
  //更新搜索值
  const upSearchVal = (value) => {
    const action = setSearchVal(value);
    store.dispatch(action);
  };
  //执行搜索
  const searchFilter = async (_value) => {
    const params = {
      page: 1,
      limit: 10,
      search: _value,
    };
    const result = await SearchAll(params);
    setResultList(result);
  };
  useEffect(() => {
    setSearchValInner(state.search_val);
  }, []);
  useEffect(() => {
    upSearchVal(searchValInner);
    searchValInner ? setIsClear(true) : setIsClear(false);
  }, [searchValInner]);
  // useMemo(() => {

  //   return searchValInner;
  // console.log(searchValInner);
  // }, [searchValInner]);
  const debounceParam = useDebounce(searchValInner, 1000);
  useEffect(() => {
    setResultList([]);
    searchFilter(searchValInner);
  }, [debounceParam]);
  return (
    <div className="search-result">
      {/* 搜索框 */}
      <div className="search-inp">
        <IconFont className="iconfont" type="icon-sousuo_search" />
        <input
          type="text"
          value={searchValInner}
          placeholder="请输入关键字"
          onChange={(e) => {
            setSearchValInner(e.target.value);
            // console.log(e.target.value)
          }}
        />
        {isClear && (
          <IconFont
            className="iconfont close-icon"
            onClick={() => {
              setSearchValInner("");
            }}
            type="icon-guanbi-xiao_close-small"
          />
        )}
      </div>
      <div className="result-inner">
        <div className="video-type">
          {!resultList.current_page ? (
            <SpinMine size="large" />
          ) : resultList.total == 0 ? (
            <p className="no-search-data">没有搜索到你想要的结果</p>
          ) : (
            <div>
              <ul>
                {resultList.data.map((el, index) => {
                  return (
                    <Link
                      to="/index/write-detail"
                      onClick={() => {
                        const action = setDifferent(1);
                        store.dispatch(action);
                        setReadIDEv(el.id);
                      }}
                      key={index}
                    >
                      <li>
                        <p className="data-type">写作</p>
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
                            <IconFont
                              className="iconfont"
                              type="icon-shijian"
                            />
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
                <button>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </button>
              </div>
            </div>
          )}
        </div>
        <MediaFeatured />
      </div>
    </div>
  );
};

export default SearchResult;
