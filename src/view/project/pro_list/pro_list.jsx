import React from "react";
import "./list.scss";
import { useState, useEffect, useImperativeHandle } from "react";
import { ProListService } from "../../../request/api";
// import store from "../../../store";
import SpinMine from "../../../comsmine/spin_mine/spin_mine";

const ProList = React.forwardRef((props, ref) => {
  // let state;
  // state = store.getState();
  // const storeChange = () => {
  //   state = store.getState();
  // };
  // store.subscribe(storeChange);
  // const [raceID,setRaceID] = useState(state.active_tab_pro_id);
  // useEffect(() => {
  //   console.log(raceID)
  // },[raceID])

  //项目列表
  const [proData, setProData] = useState({});
  useImperativeHandle(ref, () => ({
    upProDataWithID: (_id) => {
      setProData({});
      getProList(_id);
    },
  }));

  const getProList = async (_id) => {
    const params = {
      page: 1,
      limit: 10,
      rid: _id,
    };
    const result = await ProListService(params);
    setProData(result);
  };
  useEffect(() => {
    getProList("");
  }, []);
  return (
    <div className="pro-list">
      {!proData.total ? (
        <SpinMine size="large" />
      ) : (
        <ul>
          {proData.total > 0 ? (
            proData.data.map((el, index) => {
              return (
                <li key={index}>
                  <div className="msg-left">
                    <div className="img-box">
                      <img src={el.image} alt="" />
                    </div>
                    <p>
                      <a href={el.addr} target="_blank">
                        <button>网站</button>
                      </a>
                      <span className="btn-label"></span>
                      <a href={el.twitter_addr} target="_blank">
                        <button>推特</button>
                      </a>
                    </p>
                  </div>
                  <div className="msg-right">
                    <p className="msg-title">{el.title}</p>
                    <p className="msg-type">
                      <span>{el.name.join("  ")}</span>
                    </p>
                    <p className="msg-text">{el.desc}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="no-data-tag">
              <p>暂无数据</p>
            </li>
          )}
        </ul>
      )}
    </div>
  );
});

export default ProList;
