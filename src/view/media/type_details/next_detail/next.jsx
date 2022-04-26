import IconFont from "../../../../comsmine/icon_font";
import "./next.scss";
import { useState, useEffect } from "react";
import { NextMedia } from "../../../../request/api";
import { setReadIDEv } from "../../../../store/app/action_fn";
import SpinMine from "../../../../comsmine/spin_mine/spin_mine";

const NextReport = (props) => {
  const [nextInfo, setNextInfo] = useState({});
  const [isNext, setIsNext] = useState(true);
  useEffect(() => {
    // console.log(props);
    getNextMedia();
  }, []);
  const { NextTitle, MediaID, MediaType, Reload } = props;
  const getNextMedia = async (_id) => {
    const result = await NextMedia({ id: _id ? _id : MediaID, type: MediaType });
    // console.log(result);
    if (!result) {
      setIsNext(false);
      return;
    }
    setNextInfo(result);
  };
  return (
    <div className="next-report">
      {isNext && (
        <div>
          <p>
            {NextTitle}
            <IconFont className="iconfont" type="icon-you_right" />
          </p>
          {!nextInfo.title ? (
            <SpinMine size="small" />
          ) : (
            <p
              onClick={() => {
                setReadIDEv(nextInfo.id);
                Reload(nextInfo.id);
                getNextMedia(nextInfo.id);
                window.scrollTo({
                  top:0,
                  behavior:'smooth'
                })
                // console.log(props);
              }}
            >
              {nextInfo.title}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NextReport;
