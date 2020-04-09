import React from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks4PointsOxidized } from "../../utils/utils";

const Factors = ({ value, onChange, name, status }) => {
  return (
    <div className={`box p4 oxidized ${SliderStateClassMap[value]}`}>
      <div className="factor-name p5">{name}</div>
      <div className="status">{status}</div>
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
