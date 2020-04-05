import React from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks5Points } from "../../utils/utils";

const Factors = ({ value, onChange, name }) => {
  return (
    <div className={`box ${SliderStateClassMap[value]}`}>
      <span className="factor-name p5">{name}</span>
      <Slider
        range
        max={2}
        min={-2}
        value={[value]}
        included={true}
        onChange={onChange}
        marks={Marks5Points}
      />
    </div>
  );
};

export default Factors;
