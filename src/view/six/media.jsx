import React, { Component } from "react";
import { t } from "i18next";

export default class Media extends Component {
  render() {
    return (
      <div className="media-box">
        {/* 媒体 */}
        <p>{t("menu.media")}</p>
      </div>
    );
  }
}
