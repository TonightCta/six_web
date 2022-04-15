import React, { Component } from "react";
import { t } from "i18next";
import TestImg1 from "../../assets/images/about/about_with_1.png";
import "./project.scss";
import ProTab from "./tab/tab";
import ProList from "./pro_list/pro_list";
import { trackList } from "../../request/api";
import IntoContact from "../../comsmine/contact_us/into_contact";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(this.props)
  }
  setFilterRaceID = (_id) => {
    console.log(_id);
  };
  getProList = async () => {
    const result = await trackList();
    return result;
  };
  render() {
    return (
      <div className="project-box">
        {/* 投资说明 */}
        <div className="project-remark">
          <div className="msg-box">
            <p className="msg-title">我们的投资项目</p>
            <p className="msg-text">
              六一资本的发生，到底需要如何做到，不六一资本的发生，又会如何产生。
              六一资本，发生了会如何，不发生又会如何。
              一般来讲，我们都必须务必慎重的考虑考虑。
              我们都知道，只要有意义，那么就必须慎重考虑。
              克劳斯·莫瑟爵士说过一句富有哲理的话，教育需要花费钱，而无知也是一样。这启发了我，
              这样看来， 而这些并不是完全重要，更加重要的问题是，
              我们不得不面对一个非常尴尬的事实，那就是，
              本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。
              这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。
              六一资本，发生了会如何，不发生又会如何。
              现在，解决六一资本的问题，是非常非常重要的。 所以，
              这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。
            </p>
          </div>
          <img src={TestImg1} alt="" />
        </div>
        {/* 分割线 */}
        <div className="pre-line"></div>
        {/* 选项卡 */}
        <ProTab setFilterRaceID={this.setFilterRaceID} />
        {/* 数据列表 */}
        <ProList proList={this.getProList} />
        <IntoContact/>
      </div>
    );
  }
}
