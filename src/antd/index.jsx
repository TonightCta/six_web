import React, { Component } from "react";
import NavHeader from "./comsmine/nav_header";
import MenuSlider from "./comsmine/menu_slider";
import { Route, Switch } from "react-router-dom";
import { createHashHistory } from "history";
import * as View from './view/view.js';
import "./scss/index.scss";
const history = createHashHistory();
export default class Index extends Component {
  render() {
    return (
      <div>
        { /*头部导航*/ }
        <NavHeader />
        {/*主体盒子*/}
        <div className="main-box">
          { /*菜单*/ }
          <div className="menu-main-box">
            <MenuSlider />
          </div>
          { /*视图*/ }
          <div className="view-box">
            <Route history={history}>
              <Switch>
                <Route path="/index/mine-bureau" exact component={View.MineBureau}></Route>
                <Route path="/index/bureau-express" component={View.BureauExpress}></Route>
                <Route path="/index/bureau-discord" component={View.BureauDiscord}></Route>
                <Route path="/index/bureau-events" component={View.BureauEvents}></Route>
                <Route path="/index/bureau-posal" component={View.BureauPosal}></Route>
                <Route path="/index/bureau-track" component={View.BureauTrack}></Route>
              </Switch>
            </Route>
          </div>
        </div>
      </div>
    );
  }
}
