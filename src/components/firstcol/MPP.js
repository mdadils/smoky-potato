import React from "react";

import { Slider } from "antd";

const marks = {
  "-1": "Low",
  0: "Normal",
  1: "High",
  2: "OE",
};

const MPP = () => {
  return (
    <div className="box">
      <span>MPP+</span>
      <Slider
        marks={marks}
        min={-1}
        max={2}
        range
        defaultValue={[0]}
        included={true}
      />
    </div>
  );
};

export default MPP;
