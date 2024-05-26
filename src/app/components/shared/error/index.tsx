import { Alert, AlertProps } from "antd";
import { FC } from "react";

import "./style.css";

const Error: FC<AlertProps> = ({ description, onClose }) => {
  return (
    <Alert
      className="error"
      type="error"
      message="Error"
      onClose={onClose}
      closable
      description={description}
    />
  );
};

export default Error;
