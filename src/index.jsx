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
                  <Route
                    path="/index/about-us"
                    exact
                    component={View.AboutUs}
                  ></Route>

                  <Route
                    path="/index/research-report"
                    component={View.ResearchReport}
                  ></Route>
                  <Route path="/index/project" component={View.Project}></Route>
                  <Route path="/index/media" component={View.Media}></Route>
                  <Route
                    path="/index/contact-us"
                    component={View.ContactUs}
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
