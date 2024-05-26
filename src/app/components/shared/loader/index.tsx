import { LoadingOutlined } from "@ant-design/icons";
import { Spin, SpinProps } from "antd";
import { FC } from "react";

import "./style.css";

const Loader: FC<SpinProps> = ({ size = "large" }) => {
  return (
    <Spin className="loader" indicator={<LoadingOutlined />} size={size} />
  );
};

export default Loader;
