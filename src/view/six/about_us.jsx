import React, { Component } from "react";
import { t } from "i18next";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        {/* 关于我们 */}
        <p>{t("menu.about")}</p>
      </div>
    );
  }
}
