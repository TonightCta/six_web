import React, { Component } from "react";
import { t } from "i18next";
import './project.scss'

export default class Project extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="project-box">
        {/* 投资项目 */}
        <p>{t('menu.project')}</p>
      </div>
    );
  }
}
