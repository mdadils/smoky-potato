import React from "react";

import { Slider } from "antd";

const marks = {
  "-2": "Mutate",
  "-1": "Low",
  0: "Normal",
  1: "High",
  2: "OE",
};

const Trap1 = () => {
  return (
    <div className="box">
      <span>TRAP-1</span>
      <Slider
        marks={marks}
        min={-2}
        max={2}
        range
        defaultValue={[0]}
        included={true}
      />
    </div>
  );
};

export default Trap1;
