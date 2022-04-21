import React, { useState, useEffect } from "react";
import { t } from "i18next";
import TopImg from "../../assets/images/about/about_with_1.png";
import BottomImg from "../../assets/images/about/about_with_2.png";
import Logo from "../../assets/images/about/about_logo.png";
import "./about.scss";
import IntoContact from "../../comsmine/contact_us/into_contact";
import { ProDuction } from "../../request/api";
import { Spin } from "antd";

const AboutUs = () => {
  // 关于我们
  const [aboutUsMsg, setAboutUsMsg] = useState(null);
  // 研保介绍
  const [report, setReport] = useState(null);
  useEffect(async () => {
    const result = await ProDuction({ type: 1 });
    setAboutUsMsg(result);
    const report = await ProDuction({ type: 2 });
    setReport(report);
  }, []);
  return (
    <div className="about-us">
      {/* 关于我们 */}
      <div className="about-top-con">
        {/* 顶部信息 */}
        <div className="top-msg">
          <img src={Logo} alt="" />
          <p className="seg-line"></p>
          {aboutUsMsg ? (
            <div>
              <p className="public-msg msg-title">
                {/* 关于我们 */}
                {aboutUsMsg.title}
              </p>
              <p className="public-msg msg-par">
                {/* desc */}
                {aboutUsMsg.desc}
              </p>
            </div>
          ) : (
            <div className="loading-box-mine">
              <Spin size="large" />
            </div>
          )}
        </div>
        <div className="top-remark-msg">
          {aboutUsMsg ? (
            <img src={aboutUsMsg.image} alt="" />
          ) : (
            <Spin size="large" />
          )}
        </div>
      </div>
      <div className="about-bottom-con">
        <div className="bottom-msg-st">
          {report ? <img src={report.image} alt="" /> : <Spin size="large" />}
        </div>
        {report && (
          <div className="bottom-msg">
            <p className="bot-title">
              {/* 研报介绍 */}
              {report.title}
            </p>
            <p className="public-msg-bot">
              {/* desc */}
              {report.desc}
            </p>
          </div>
        )}
      </div>
      {/* 加入我们 */}
      <IntoContact />
    </div>
  );
};

export default AboutUs;
