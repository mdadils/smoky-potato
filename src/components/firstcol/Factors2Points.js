import React from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks2Points } from "../../utils/utils";

const Factors = ({ value, onChange, name }) => {
  return (
    <div className={`box p2 ${SliderStateClassMap[value]}`}>
      <span className="factor-name ">{name}</span>
      <Slider
        marks={Marks2Points}
        min={0}
        max={1}
        range
        value={[value]}
        onChange={onChange}
        included={true}
      />
    </div>
  );
};

export default Factors;
