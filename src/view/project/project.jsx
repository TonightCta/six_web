import React, { useRef, useState, useEffect } from "react";
import { t } from "i18next";
import TestImg1 from "../../assets/images/about/about_with_1.png";
import "./project.scss";
import ProTab from "./tab/tab";
import ProList from "./pro_list/pro_list";
import IntoContact from "../../comsmine/contact_us/into_contact";
import { ProDuction } from "../../request/api";
import SpinMine from "../../comsmine/spin_mine/spin_mine";

const Project = () => {
  const [proInfo, setProInfo] = useState({});
  const listRef = useRef();
  const setFilterRaceID = (_id) => {
    listRef.current.upProDataWithID(_id);
  };
  const getProjectInfo = async () => {
    const result = await ProDuction({ type: 4 });
    setProInfo(result);
  };
  useEffect(() => {
    getProjectInfo();
  }, []);
  return (
    <div className="project-box">
      {/* 投资说明 */}
      {!proInfo.title ? (
        <SpinMine size="large" />
      ) : (
        <div className="project-remark">
          <div className="msg-box">
            <p className="msg-title">{proInfo.title}</p>
            <p className="msg-text">{proInfo.desc}</p>
          </div>
          <img src={proInfo.image} alt="" />
        </div>
      )}

      {/* 分割线 */}
      <div className="pre-line"></div>
      {/* 选项卡 */}
      <ProTab setFilterRaceID={setFilterRaceID} />
      {/* 数据列表 */}
      <ProList ref={listRef} />
      <IntoContact />
    </div>
  );
};
export default Project;
