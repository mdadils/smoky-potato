import React from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks4Points } from "../../utils/utils";

const Factors = ({ value, onChange, name, status }) => {
  return (
    <div className={`box p4 ${SliderStateClassMap[value]}`}>
      <span className="factor-name p5">{name}</span>
      <Slider
        range
        max={1}
        min={-2}
        value={[value]}
        included={true}
        onChange={onChange}
        marks={Marks4Points}
        tooltipVisible={false}
      />
      <div className="status">{status}</div>
    </div>
  );
};

export default Factors;
