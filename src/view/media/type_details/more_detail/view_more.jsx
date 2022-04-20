import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import store from "../../../../store";
import { setMediaType } from "../../../../store/app/action_creators";
import "./more.scss";
const ViewMore = () => {
  const history = useHistory();
  const [feedback, setFeedbak] = useState("");
  useEffect(() => {
    // console.log(feedback);
  }, [feedback]);
  useEffect(() => {
      return 
  },[]);
  const goOtherType = (_type) => {
    history.push("/index/media");
    const action = setMediaType(_type);
    store.dispatch(action);
  };
  return (
    <div className="view-more">
      <p className="more-title">更多内容</p>
      <div className="more-tab">
        <p
          onClick={() => {
            goOtherType(1);
          }}
        >
          精选
        </p>
        <span>/</span>
        <p
          onClick={() => {
            goOtherType(2);
          }}
        >
          写作
        </p>
        <span>/</span>
        <p
          onClick={() => {
            goOtherType(3);
          }}
        >
          播客
        </p>
        <span>/</span>
        <p
          onClick={() => {
            goOtherType(4);
          }}
        >
          视频
        </p>
      </div>
      <p className="sub-remark">
        订阅我们的时事通讯，我们将精选内容直接发送到您的邮箱
      </p>
      <div className="feedback-address">
        <input
          type="text"
          value={feedback}
          placeholder="输入电子邮箱地址"
          onChange={(e) => {
            setFeedbak(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(feedback);
          }}
        >
          订阅
        </button>
      </div>
    </div>
  );
};

export default ViewMore;
