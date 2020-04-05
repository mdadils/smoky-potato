import React from "react";

import { Slider } from "antd";

const marks = {
  "-1": "Low",
  0: "Normal",
  1: "High",
  2: "OE",
};

const Dopamine = () => {
  return (
    <div className="box">
      <span>Dopamine</span>
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

export default Dopamine;
