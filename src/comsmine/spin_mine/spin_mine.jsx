import { Spin } from "antd";
import "./mine_s.scss";

const SpinMine = (props) => {
  return (
    <div className="loading-box-mine">
      <Spin size={props.size} />
    </div>
  );
};
export default SpinMine;
