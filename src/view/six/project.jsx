import React, { Component } from "react";
import { t } from "i18next";

export default class Project extends Component {
  render() {
    return (
      <div className="project-box">
        {/* 投资项目 */}
        <p>{t('menu.project')}</p>
      </div>
    );
  }
}
