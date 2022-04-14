import React, { Component } from "react";
import { t } from "i18next";
import TopImg from "../../assets/images/about/about_with_1.png";
import BottomImg from "../../assets/images/about/about_with_2.png";
import Logo from "../../assets/images/about/about_logo.png";
import "./about.scss";
import IntoContact from "../../comsmine/contact_us/into_contact";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        {/* 关于我们 */}
        <div className="about-top-con">
          {/* 顶部信息 */}
          <div className="top-msg">
            <img src={Logo} alt="" />
            <p className="seg-line"></p>
            <p className="public-msg msg-title">{t("menu.about")}</p>
            <p className="public-msg msg-par">
              六一资本是以研究驱动的区块链创新投资机构，致力于投资全球范围内的区块链创新，投资范围涵盖WEB3、GameFi、DeFi以及区块链基础设施等各个领域。我们成立于2019年6月1日，在此之前团队已经在区块链领域深耕了三年，尽调了海内外3500+区块链项目，奠定了深厚的投研基础。与此同时，旗下孵化的区块链投研机构“头等仓”目前已产出近300份深度的项目研报，影响力辐射范围包括中国头部加密基金、交易所投资部、项目方投资部以及币圈众多知名的KOL。头等仓在专业性与中立性上广受赞誉，目前已挤身华语地区一线的投研机构。
            </p>
            <p className="public-msg msg-par">
              作为一支原生区块链投资团队，集“玩、研、投”于一体，六一资本极具探险和深研精神。我们真切希望能够携手行业内初创项目实现任何大胆、有趣和能够为整个区块链生态带来价值的创意。
            </p>
          </div>
          <img className="top-remark-msg" src={TopImg} alt="" />
        </div>
        <div className="about-bottom-con">
          <img src={BottomImg} alt="" />
          <div className="bottom-msg">
            <p className="bot-title">研报介绍</p>
            <p className="public-msg-bot">
              研报主要从6大维度（产品战略、解决方案、历史发展、通政经济、竞争比较、特殊因素分析等）和48个指标（社区、方案可行性、团队规模、黑历史、产品体验、市场规模、技术原理、人员构成、资金来源、生态规模、产品&需求匹配度、技术可行性、顾问、投资机构、重大事件、市场推广、基金会角色&职能、资金储备、风险......）来全方位调研分析全球区块链项目，适合所有想全面了解区块链项目的朋友。
            </p>
            <p className="public-msg-bot">
              您可以直接点击头等仓官网进入查询更多研报。头等仓区块链项目的深度尽调报告是不断更新的，除此之外还有赛道解析、新币速递及任意项目咨询等功能。
            </p>
          </div>
        </div>
        {/* 加入我们 */}
        <IntoContact />
      </div>
    );
  }
}
