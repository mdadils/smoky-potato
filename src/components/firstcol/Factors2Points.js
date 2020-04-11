import React from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks2Points } from "../../utils/utils";

const Factors = ({ value, onChange, name, status }) => {
  return (
    <div className={`box p2 ${name} ${SliderStateClassMap[value]}`}>
      <span className="factor-name ">{name}</span>
      <div className="status">{status}</div>
      <Slider
        range
        max={1}
        min={0}
        included={true}
        value={[value]}
        onChange={onChange}
        marks={Marks2Points}
        tooltipVisible={false}
      />
    </div>
  );
};

export default Factors;
