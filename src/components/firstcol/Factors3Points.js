import React from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks3Points } from "../../utils/utils";

const Factors = ({ value, onChange, name }) => {
  return (
    <div className={`box ${SliderStateClassMap[value]}`}>
      <span>{name}</span>
      <Slider
        marks={Marks3Points}
        min={-1}
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
