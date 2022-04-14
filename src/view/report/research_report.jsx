import React, { Component } from "react";
import { t } from "i18next";
import IntoContact from "../../comsmine/contact_us/into_contact";
import "./report.scss";

export default class ResearchReport extends Component {
  render() {
    return (
      <div className="research-report">
        {/* 研报 */}
        <div className="top-banner">
          <p className="banner-title">研报</p>
          <p className="banner-remark">全方位调研分析全球区块链项目</p>
          <p className="banner-remark">适合所有想全面了解区块链项目的朋友</p>
        </div>
        {/* 我们的研报 */}
        <div className="our-report">
          <p className="our-title">我们的研报</p>
          <p className="our-remark">
            研报主要从6大维度（产品战略、解决方案、历史发展、通政经济、竞争比较、特殊因素分析等）和48个指标（社区、方案可行性、团队规模、黑历史、产品体验、市场规模、技术原理、人员构成、资金来源、生态规模、产品&需求匹配度、技术可行性、顾问、投资机构、重大事件、市场推广、基金会角色&职能、资金储备、风险......）来全方位调研分析全球区块链项目，适合所有想全面了解区块链项目的朋友。
          </p>
          <p className="our-remark">
            您可以直接点击<a href="https://first.vip" target="_blank">头等仓官网</a>
            进入查询更多研报。头等仓区块链项目的深度尽调报告是不断更新的，除此之外还有赛道解析、新币速递及任意项目咨询等功能。
          </p>
        </div>
        <IntoContact/>
      </div>
    );
  }
}
