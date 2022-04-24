import { t } from "i18next";
import IntoContact from "../../comsmine/contact_us/into_contact";
import "./report.scss";
import IconFont from "../../comsmine/icon_font";
import { useState, useEffect } from "react";
import { ProDuction, ReportList } from "../../request/api";
import SpinMine from "../../comsmine/spin_mine/spin_mine";

const ResearchReport = () => {
  const [reportInfo, setRepostinfo] = useState({});
  const [reportList, setReportList] = useState([]);
  useEffect(async () => {
    const result = await ProDuction({ type: 3 });
    setRepostinfo(result);
    const report = await ReportList({ page: 1, limit: 3 });
    setReportList(report.data);
  }, []);
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
        <p className="our-title">{reportInfo.title}</p>
        <p className="our-remark">{reportInfo.desc}</p>
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
          <div className="remark-left-img">
            {!reportList[0] ? (
              <SpinMine size="large" />
            ) : (
              <img src={reportList[0].image} alt="" />
            )}
          </div>
          {reportList[0] && (
            <div className="remark-msg">
              <p className="msg-title">{reportList[0].title}</p>
              <p className="msg-text">{reportList[0].desc}</p>
              <p className="view-more">
                <button>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </button>
              </p>
            </div>
          )}
        </div>
        {/* Remark - 2 */}
        <div className="remark-need-center">
          <div className="remark-center-img">
            {!reportList[1] ? (
              <SpinMine size="large" />
            ) : (
              <img src={reportList[1].image} alt="" />
            )}
          </div>
          {reportList[1] && (
            <div className="remark-msg">
              <p className="msg-title">{reportList[1].title}</p>
              <p className="msg-text">{reportList[1].desc}</p>
              <p className="view-more">
                <button>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </button>
              </p>
            </div>
          )}
        </div>
        {/* Remark - 1 */}
        <div className="remark-need-left">
          <div className="remark-left-img">
            {!reportList[2] ? (
              <SpinMine size="large" />
            ) : (
              <img src={reportList[2].image} alt="" />
            )}
          </div>
          {reportList[2] && (
            <div className="remark-msg">
              <p className="msg-title">{reportList[2].title}</p>
              <p className="msg-text">{reportList[2].desc}</p>
              <p className="view-more">
                <button>
                  查看更多
                  <IconFont className="iconfont" type="icon-you_right" />
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
      <IntoContact />
    </div>
  );
};

export default ResearchReport;
