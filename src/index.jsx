import React, { Component } from "react";
import NavHeader from "./comsmine/nav/nav_header";
import MenuSlider from "./comsmine/menu_slider";
import { Route, Switch } from "react-router-dom";
import { createHashHistory } from "history";
import * as View from "./view/view.js";
import "./scss/index.scss";
const history = createHashHistory();
export default class Index extends Component {
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
                <Route
                  path="/index/about-us"
                  exact
                  component={View.AboutUs}
                ></Route>
                <Route
                  path="/index/research-report"
                  component={View.ResearchReport}
                ></Route>
                <Route
                  path="/index/project"
                  component={View.Project}
                ></Route>
                <Route
                  path="/index/media"
                  component={View.Media}
                ></Route>
                <Route
                  path="/index/contact-us"
                  component={View.ContactUs}
                ></Route>
              </Switch>
            </Route>
          </div>
        </div>
      </div>
    );
  }
}
