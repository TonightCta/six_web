import "./recommend.scss";
import store from "../../../store";
import { setMediaType } from "../../../store/app/action_creators";
import { useState, useEffect } from "react";
import { MediaWrite } from "../../../request/api";
import SpinMine from "../../../comsmine/spin_mine/spin_mine";
const MediaWriteRender = () => {
  const [reWriteList, setReWriteList] = useState({});
  useEffect(async () => {
    const result = await MediaWrite({ page: 1, limit: 5 });
    setReWriteList(result);
  }, []);
  return (
    <div className="recommend-box">
      <div className="title-and-line">
        <p className="re-title">
          写作
          <span
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              const action = setMediaType(2);
              store.dispatch(action);
            }}
          >
            查看更多
          </span>
        </p>
        <div className="re-line"></div>
      </div>
      <div className="re-list">
        {!reWriteList.total ? (
          <SpinMine size=" " />
        ) : (
          <ul>
            {reWriteList.data.map((el, index) => {
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
export default MediaWriteRender;
