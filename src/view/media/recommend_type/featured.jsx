import "./recommend.scss";
import store from "../../../store";
import { setMediaType } from "../../../store/app/action_creators";
import { MediaFeatured } from "../../../request/api";
import { useState, useEffect } from "react";
import SpinMine from "../../../comsmine/spin_mine/spin_mine";
const MediaFeaturedRender = () => {
  const [reFeaList, setReFeaList] = useState({});
  useEffect(async () => {
    const result = await MediaFeatured({ page: 1, limit: 5 });
    setReFeaList(result);
  }, []);
  return (
    <div className="recommend-box">
      <div className="title-and-line">
        <p className="re-title">
          精选
          <span
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              const action = setMediaType(1);
              store.dispatch(action);
            }}
          >
            查看更多
          </span>
        </p>
        <div className="re-line"></div>
      </div>
      <div className="re-list">
        {!reFeaList.total ? (
          <SpinMine size=" " />
        ) : (
          <ul>
            {reFeaList.data.map((el, index) => {
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
export default MediaFeaturedRender;
