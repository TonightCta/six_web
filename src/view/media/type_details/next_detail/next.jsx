import IconFont from "../../../../comsmine/icon_font";
import "./next.scss";
import { useEffect } from "react";

const NextReport = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  const { NextTitle } = props;
  return (
    <div className="next-report">
      <p>
        {NextTitle}
        <IconFont className="iconfont" type="icon-you_right" />
      </p>
      <p>Coinbase公布21年Q4财报：收入创新高并达到24.9亿美元 月活用户达1140万</p>
    </div>
  );
};

export default NextReport;
