import React, { Component } from "react";
import { t } from "i18next";

export default class ResearchReport extends Component {
  render() {
    return (
      <div className="research-report">
        {/* 研报 */}
        <p>{t("menu.report")}</p>
      </div>
    );
  }
};
