import React from "react";
import { CaretUpFilled, CaretDownFilled } from "@ant-design/icons";

const StatusIcon = ({ className, type }) => {
  if (type === "dec") {
    return <CaretDownFilled className={`status-icon ${className} ${type}`} />;
  } else if (type === "inc") {
    return <CaretUpFilled className={`status-icon ${className} ${type}`} />;
  } else {
    return null;
  }
};

export default StatusIcon;
