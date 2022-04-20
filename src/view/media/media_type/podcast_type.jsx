import "./_type.scss";
import IconFont from "../../../comsmine/icon_font";
import TestImg from "../../../assets/images/test.png";
import { Link } from "react-router-dom";
const PodcastType = () => {
  return (
    <div className="video-type">
      <ul>
        <Link to="/index/podcast-detail">
          <li>
            <p className="data-type">播客</p>
            <p className="data-title">
              Coinbase公布21年Q4财报：收入创新高并达到24.9亿美元
              月活用户达1140万
            </p>
            <div className="data-with-img">
              <div className="img-box">
                <img src={TestImg} alt="" />
              </div>
              <p className="data-content">
                一般来说，
                马云曾经说过，最大的挑战和突破在于用人，而用人最大的突破在于信任人。这不禁令我深思。
                我们不得不面对一个非常尴尬的事实，那就是，
                本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。
                六一资本的发生，到底需要如何做到，不六一资本的发生，又会如何产生。
                六一资本，发生了会如何，不发生又会如何。
                一般来讲，我们都必须务必慎重的考虑考虑。
                我们都知道，只要有意义，那么就必须慎重考虑。
                克劳斯·莫瑟爵士说过一句富有哲理的话，教育需要花费钱，而无知也是一样。
              </p>
            </div>

            <div className="author-msg">
              <div className="author-box">
                <p>
                  作者：
                  <span>蔡国庆</span>
                  <i className="box-point"></i>
                  1天前
                </p>
              </div>
              <div className="msg-box">
                <IconFont className="iconfont" type="icon-shijian" />
                <p>阅读时间：4分钟</p>
              </div>
            </div>
          </li>
        </Link>
      </ul>
      {/* 加载更多 */}
      <div className="load-more">
        <button>
          查看更多
          <IconFont className="iconfont" type="icon-you_right" />
        </button>
      </div>
    </div>
  );
};

export default PodcastType;
