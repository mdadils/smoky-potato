import React from "react";
import { Col, Row, Slider } from "antd";

import { MarksCalcium, MarksApopNoName } from "../../utils/utils";

const EffectsBoxCalcium = ({ name, status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider calcium ${name} ${className}`}>
      <div className="name">{name}</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={14}>
          <Slider
            range
            min={0}
            max={1}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksApopNoName}
          />
        </Col>
        <Col span={10}>
          <span className="slider-label">{!status && MarksCalcium[value]}</span>
        </Col>
      </Row>
    </div>
  );
};

export default EffectsBoxCalcium;
