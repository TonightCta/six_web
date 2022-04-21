import React, { Component } from "react";
import NavHeader from "./comsmine/nav/nav_header";
import FooterNav from "./comsmine/bottom_nav/bottom_nav";
import { Route, Switch } from "react-router-dom";
import { createHashHistory } from "history";
import AnimatedRouter from "react-animated-router";
import "./assets/css/route_animate.css";
import * as View from "./view/view.js";
import "./scss/index.scss";
const history = createHashHistory();
export default class Index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {/*头部导航*/}
        <NavHeader />
        {/*主体盒子*/}
        <div className="main-box">
          {/*视图*/}
          <div className="view-box">
            <Route history={history}>
              <Switch>
                <AnimatedRouter>
                  {/* 关于我们 */}
                  <Route
                    path="/index/about-us"
                    exact
                    component={View.AboutUs}
                  ></Route>
                  {/* 研保 */}
                  <Route
                    path="/index/research-report"
                    component={View.ResearchReport}
                  ></Route>
                  {/* 投资项目 */}
                  <Route path="/index/project" component={View.Project}></Route>
                  {/* 媒体 */}
                  <Route path="/index/media" component={View.Media}></Route>
                  {/* 联系我们 */}
                  <Route
                    path="/index/contact-us"
                    component={View.ContactUs}
                  ></Route>
                  {/* 写作 / 精选详情 */}
                  <Route
                    path="/index/write-detail"
                    component={View.WriteDetail}
                  ></Route>
                  {/* 视频媒体详情 */}
                  <Route
                    path="/index/video-detail"
                    component={View.VideoDetail}
                  ></Route>
                  {/* 播客媒体详情 */}
                  <Route
                    path="/index/podcast-detail"
                    component={View.PodcastDetail}
                  ></Route>
                  {/* 搜索内容页 */}
                  <Route
                    path="/index/search"
                    component={View.SearchResult}
                  ></Route>
                </AnimatedRouter>
              </Switch>
            </Route>
          </div>
        </div>
        {/*底部导航*/}
        <FooterNav />
      </div>
    );
  }
}
