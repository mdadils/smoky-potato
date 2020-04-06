import React from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks4PointsOxidized } from "../../utils/utils";

const Factors = ({ value, onChange, name }) => {
  return (
    <div className={`box p4 oxidized ${SliderStateClassMap[value]}`}>
      <span className="factor-name">{name}</span>
      <Slider
        range
        max={1}
        min={-2}
        value={[value]}
        included={true}
        onChange={onChange}
        tooltipVisible={false}
        marks={Marks4PointsOxidized}
      />
    </div>
  );
};

export default Factors;
