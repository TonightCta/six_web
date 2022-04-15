import React, { Component } from "react";
import { t } from "i18next";
import IntoContact from "../../comsmine/contact_us/into_contact";
import TestImg from "../../assets/images/report_bg.png";
import TestImg2 from "../../assets/images/report_bg_2.png";
import TestImg3 from "../../assets/images/report_bg_3.png";
import "./report.scss";
import IconFont from "../../comsmine/icon_font";

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
            您可以直接点击
            <a href="https://first.vip" target="_blank">
              头等仓官网
            </a>
            进入查询更多研报。头等仓区块链项目的深度尽调报告是不断更新的，除此之外还有赛道解析、新币速递及任意项目咨询等功能。
          </p>
        </div>
        <div className="remark-box">
          {/* Remark - 1 */}
          <div className="remark-need-left">
            <img src={TestImg} alt="" />
            <div className="remark-msg">
              <p className="msg-title">Aleph</p>
              <p className="msg-text">
                Web 2.0
                指的是我们今天大多数人都知道的互联网版本，一个由公司为主导，通过提供服务来换取用户个人数据的互联网。而
                Web 3.0
                是指在区块链上运行的去中心化应用程序。这些应用程序允许任何人参与并且拥有个人数据的所有权。
              </p>
              <p className="msg-text need-height">
                近两年随着 Web 3.0
                热度不断的上升，底层基础设施的建设也在不断地推进。本文探讨的
                Aleph.im 就是其中之一：Aleph.im
                是一个可服务于多链的基础设施解决方案，专注于构建一个去中心化的云服务平台
                ，旨在作为
                AWS、华为云或其他传统云服务提供商的分布式替代方案。目前 Aleph.im
                通过提供去中心化数据库（包括文件存储）、计算服务（microVMs）、去中心化身份（DID）框架和
                Solana
                上的去中心化的索引服务来实现这一目标。在叙事方面来看，Aleph.im
                高度契合 Web 3.0 概念。
              </p>
              <p className="view-more">
                <button>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </button>
              </p>
            </div>
          </div>
          {/* Remark - 2 */}
          <div className="remark-need-center">
            <img src={TestImg3} alt="" />
            <div className="remark-msg">
              <p className="msg-title">Ethereum Name Service</p>
              <p className="msg-text">
                ENS
                是基于以太坊的开放式、可扩展的去中心化域名服务协议，为用户提供了.eth
                域名和集成的 DNS 域名。用户通过 ENS
                可以实现区块链地址的映射，极大的便利了用户转账交易等操作。此外，网站可以通过
                ENS 将去中心化域名与 IPFS
                的和以太坊的去中心化计算和储存相结合，从而实现 Web3.0
                网站的部署。作为去中心化域名，ENS
                有着较强的实用价值，未来有着较大的发展空间。
              </p>
              <p className="view-more">
                <button>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </button>
              </p>
            </div>
          </div>
          {/* Remark - 1 */}
          <div className="remark-need-left">
            <img src={TestImg2} alt="" />
            <div className="remark-msg">
              <p className="msg-title">The Sandbox</p>
              <p className="msg-text">
                Web 2.0
                指的是我们今天大多数人都知道的互联网版本，一个由公司为主导，通过提供服务来换取用户个人数据的互联网。而
                Web 3.0
                是指在区块链上运行的去中心化应用程序。这些应用程序允许任何人参与并且拥有个人数据的所有权。
              </p>
              <p className="msg-text need-height">
                近两年随着 Web 3.0
                热度不断的上升，底层基础设施的建设也在不断地推进。本文探讨的
                Aleph.im 就是其中之一：Aleph.im
                是一个可服务于多链的基础设施解决方案，专注于构建一个去中心化的云服务平台
                ，旨在作为
                AWS、华为云或其他传统云服务提供商的分布式替代方案。目前 Aleph.im
                通过提供去中心化数据库（包括文件存储）、计算服务（microVMs）、去中心化身份（DID）框架和
                Solana
                上的去中心化的索引服务来实现这一目标。在叙事方面来看，Aleph.im
                高度契合 Web 3.0 概念。
              </p>
              <p className="view-more">
                <button>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </button>
              </p>
            </div>
          </div>
        </div>
        <IntoContact />
      </div>
    );
  }
}
