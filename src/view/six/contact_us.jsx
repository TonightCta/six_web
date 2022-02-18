import React, { Component } from "react";
import { trackList } from "../../request/api";
import { t } from "i18next";

export default class ContactUs extends Component {
  componentDidMount() {
    this.testAxios();
  }
  async testAxios() {
    const result = await trackList();
    // console.log(result);
  }
  render() {
    return (
      <div className="contact-us">
        {/* 联系我们 */}
        <p>{t("menu.contact")}</p>
      </div>
    );
  }
}
