import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import store from "../../../../store";
import { setMediaType } from "../../../../store/app/action_creators";
import "./more.scss";
import { SubscribeMsg } from "../../../../request/api";
import { message } from "antd";
import SpinMine from "../../../../comsmine/spin_mine/spin_mine";
const ViewMore = () => {
  const history = useHistory();
  const [feedback, setFeedbak] = useState("");
  const [upStatus, setUpStatus] = useState(false);
  const goOtherType = (_type) => {
    history.push("/index/media");
    const action = setMediaType(_type);
    store.dispatch(action);
  };
  const upSubscribe = async () => {
    const rule = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
    if (!feedback) {
      message.error("请输入邮箱地址");
    } else if (!rule.test(feedback)) {
      message.error("请输入正确的邮箱地址");
    } else {
      setUpStatus(true);
      const result = await SubscribeMsg({ email: feedback });
      if (!result) {
        message.error(result.msg);
        setUpStatus(false);
        return;
      }
      message.success("订阅成功");
      setUpStatus(false);
      setFeedbak("");
    }
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
          onClick={async () => {
            upSubscribe();
          }}
        >
          {upStatus ? <SpinMine size="small" /> : <span>订阅</span>}
        </button>
      </div>
    </div>
  );
};

export default ViewMore;
