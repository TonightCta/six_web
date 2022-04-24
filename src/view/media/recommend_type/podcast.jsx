import "./recommend.scss";
import store from "../../../store";
import { setMediaType } from "../../../store/app/action_creators";
import { MediaPodcast } from "../../../request/api";
import { useState, useEffect } from "react";
import SpinMine from "../../../comsmine/spin_mine/spin_mine";

const MediaPodcastRender = () => {
  const [rePodList, setRePodList] = useState({});
  useEffect(async () => {
    const result = await MediaPodcast({ page: 1, limit: 5 });
    setRePodList(result);
  }, []);
  return (
    <div className="recommend-box">
      <div className="title-and-line">
        <p className="re-title">
          播客
          <span
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              const action = setMediaType(3);
              store.dispatch(action);
            }}
          >
            查看更多
          </span>
        </p>
        <div className="re-line"></div>
      </div>
      <div className="re-list">
        {!rePodList.total ? (
          <SpinMine size=" " />
        ) : (
          <ul>
            {rePodList.data.map((el, index) => {
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
export default MediaPodcastRender;
