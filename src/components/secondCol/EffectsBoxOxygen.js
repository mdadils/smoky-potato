import React from "react";
import { Col, Row, Slider } from "antd";

import { MarksDopaN, MarksDopaNNoName } from "../../utils/utils";

const EffectsBoxOxygen = ({ name, status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider dopaN ${name} ${className}`}>
      <div className="name">{name}</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={14}>
          <Slider
            range
            min={-1}
            max={0}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksDopaNNoName}
          />
        </Col>
        <Col span={10}>
          <span className="slider-label">{!status && MarksDopaN[value]}</span>
        </Col>
      </Row>
    </div>
  );
};

export default EffectsBoxOxygen;
