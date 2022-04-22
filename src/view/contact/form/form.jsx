import React, { Component } from "react";
import { message, Spin } from "antd";
import "./form.scss";
import { UpFiles, FeedBack } from "../../../request/api";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      //项目名称
      project_name: "",
      //项目输入状态
      pro_label_status: 0,
      //项目官网
      project_websit: "",
      //项目官网输入状态
      websit_label_status: 0,
      //项目信息
      project_info: "",
      //项目信息输入状态
      info_label_status: 0,
      //项目附件
      project_file: "",
      //项目附件状态
      file_label_status: 0,
      //帮助类型选择
      help_type: 99,
      //联系方式
      contact_way: "",
      //联系方式输入状态
      contact_way_status: 0,
      //上传状态
      up_status: false,
    };
    this.helpList = [
      {
        name: "产品设计",
        type: 0,
      },
      {
        name: "研究报告",
        type: 1,
      },
      {
        name: "资金投资",
        type: 2,
      },
    ];
    this.file_ref = React.createRef();
  }
  //类型选择状态
  setTabActive = (_index) => {
    return _index == this.state.help_type ? "active-help" : "";
  };
  //提交反馈
  subFeedBack = async () => {
    console.log(this.state);
    if (!this.state.project_name) {
      message.error("请输入项目名称");
      return;
    }
    if (!this.state.project_info) {
      message.error("请输入项目信息");
      return;
    }
    if (!this.state.project_file) {
      message.error("请上传反馈附件");
      return;
    }
    if (this.state.help_type == 99) {
      message.error("请选择帮助类型");
      return;
    }
    if (!this.state.contact_way) {
      message.error("请输入您的联系方式");
      return;
    }
    this.setState({
      up_status: true,
    });
    const formdata = new FormData();
    formdata.append("file", this.state.project_file);
    const file = await UpFiles(formdata);
    console.log(file);
    if (!file.data) {
      message.error(file.msg);
      return;
    }
    const params = {
      name: this.state.project_name,
      info: this.state.project_info,
      file: file.data.fullurl,
      url: this.state.project_websit,
      contact: this.state.contact_way,
      type: this.state.help_type,
    };
    const feed = await FeedBack(params);
    console.log(feed);
    message.success("提交成功");
    this.setState({
      project_name: "",
      pro_label_status: 0,
      project_websit: "",
      websit_label_status: 0,
      project_info: "",
      info_label_status: 0,
      project_file: "",
      file_label_status: 0,
      help_type: 99,
      contact_way: "",
      contact_way_status: 0,
      up_status: false,
    });
  };
  render() {
    return (
      <div className="contact-form">
        <form>
          <ul className="form-ul">
            {/* 项目名称 */}
            <li className={this.state.pro_label_status == 1 ? "label-top" : ""}>
              <input
                type="text"
                value={this.state.project_name}
                onChange={(e) => {
                  this.setState({
                    project_name: e.target.value,
                  });
                }}
                onFocus={() => {
                  this.setState({
                    pro_label_status: 1,
                  });
                }}
                onBlur={() => {
                  this.setState({
                    pro_label_status: !this.state.project_name ? 0 : 1,
                  });
                }}
              />
              <label>项目名称</label>
            </li>
            {/* 项目官网链接 */}
            <li
              className={this.state.websit_label_status == 1 ? "label-top" : ""}
            >
              <input
                type="text"
                value={this.state.project_websit}
                onChange={(e) => {
                  this.setState({
                    project_websit: e.target.value,
                  });
                }}
                onFocus={() => {
                  this.setState({
                    websit_label_status: 1,
                  });
                }}
                onBlur={() => {
                  this.setState({
                    websit_label_status: !this.state.project_websit ? 0 : 1,
                  });
                }}
              />
              <label>
                项目官网链接&nbsp;&nbsp;<font>(如果有的话)</font>
              </label>
            </li>
            {/* 项目信息 */}
            <li
              className={this.state.info_label_status == 1 ? "label-top" : ""}
            >
              <input
                type="text"
                value={this.state.project_info}
                onChange={(e) => {
                  this.setState({
                    project_info: e.target.value,
                  });
                }}
                onFocus={() => {
                  this.setState({
                    info_label_status: 1,
                  });
                }}
                onBlur={() => {
                  this.setState({
                    info_label_status: !this.state.project_info ? 0 : 1,
                  });
                }}
              />
              <label>项目信息</label>
            </li>
            {/* 附件 */}
            <li
              className={this.state.file_label_status == 1 ? "label-top" : ""}
            >
              {this.state.project_file ? (
                <p>
                  {this.state.project_file.name}
                  <span
                    onClick={() => {
                      this.file_ref.current.value = "";
                      this.setState({
                        project_file: "",
                        file_label_status: 0,
                      });
                    }}
                  >
                    删除
                  </span>
                </p>
              ) : (
                ""
              )}
              <input
                type="file"
                single="1"
                ref={this.file_ref}
                className="file-inp"
                accept=".pdf,.xls,.doc,.ppt,"
                onChange={(e) => {
                  this.setState({
                    project_file: e.target.files[0],
                  });
                }}
                onFocus={() => {
                  this.setState({
                    file_label_status: 1,
                  });
                }}
                onBlur={() => {
                  this.setState({
                    file_label_status: !this.state.project_file ? 0 : 1,
                  });
                }}
              />
              <label>
                附件&nbsp;&nbsp;
                <font>(你可以提交任何PDF类型的文件，比如PPT、白皮书等)</font>
              </label>
            </li>
          </ul>
        </form>
        {/* 帮助类型 */}
        <p className="help-type">你需要六一资本提供什么帮助？</p>
        <div className="type-list">
          <ul>
            {this.helpList.map((el, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    this.setState({
                      help_type: index,
                    });
                  }}
                  className={this.setTabActive(index)}
                >
                  <p>{el.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* 联系方式 */}
        <div
          className={`contact-way ${
            this.state.contact_way_status == 1 ? "label-top" : ""
          }`}
        >
          <input
            type="text"
            value={this.state.contact_way}
            onFocus={() => {
              this.setState({
                contact_way_status: 1,
              });
            }}
            onBlur={() => {
              this.setState({
                contact_way_status: !this.state.contact_way ? 0 : 1,
              });
            }}
            onChange={(e) => {
              this.setState({
                contact_way: e.target.value,
              });
            }}
          />
          <label>
            联系方式<span>(邮箱/推特/电报/微信均可)</span>
          </label>
        </div>
        {/* 提交 */}
        <div className="contact-sub">
          <button
            onClick={() => {
              this.subFeedBack();
            }}
            disabled={this.state.up_status}
          >
            {this.state.up_status ? <Spin size="small" /> : "提交"}
          </button>
        </div>
      </div>
    );
  }
}
