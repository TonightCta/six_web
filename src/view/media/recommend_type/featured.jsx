import "./recommend.scss";
import store from "../../../store";
import { setMediaType } from "../../../store/app/action_creators";
const MediaFeatured = () => {
  const reList = [
    "BTC V形反转 回升有望延续？",
    "Coinbase公布21年Q4财报：收入创新高并达到24.9亿美元 月活用户达1140万",
    "刘扬律师解读：虚拟币交易是非法集资？",
    "餐桌上怎么变出元宇宙？",
    "那些ALL IN 加密货币的年轻人",
  ];
  return (
    <div className="recommend-box">
      <div className="title-and-line">
        <p className="re-title">
          精选
          <span
            onClick={() => {
              window.scrollTo({
                top:0,
                behavior:'smooth'
              })
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
        <ul>
          {reList.map((el, index) => {
            return (
              <li key={index}>
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default MediaFeatured;
