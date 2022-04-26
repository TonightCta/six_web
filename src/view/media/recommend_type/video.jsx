import "./recommend.scss";
import store from "../../../store";
import { setMediaType } from "../../../store/app/action_creators";
import { MediaVideo } from "../../../request/api";
import { useState, useEffect } from "react";
import SpinMine from "../../../comsmine/spin_mine/spin_mine";
const MediaVideoRender = () => {
  const [reVideoList, setReVideoList] = useState({});
  useEffect(async () => {
    const result = await MediaVideo({ page: 1, limit: 5 });
    setReVideoList(result);
  }, []);
  return (
    <div className="recommend-box">
      <div className="title-and-line">
        <p className="re-title">
          视频
          <span
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              const action = setMediaType(4);
              store.dispatch(action);
            }}
          >
            查看更多
          </span>
        </p>
        <div className="re-line"></div>
      </div>
      <div className="re-list">
        {!reVideoList.total ? (
          <SpinMine size=" " />
        ) : (
          <ul>
            {reVideoList.data.map((el, index) => {
              return (
                <li key={index}>
                  <p>{el.title}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default MediaVideoRender;
