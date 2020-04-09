import React from "react";
import { Col, Row, Slider } from "antd";

import { MarksMembraneATP, MarksMembraneATPNoName } from "../../utils/utils";

const EffectsBoxATP = ({ name, status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider mem-pot ${name} ${className}`}>
      <div>{name}</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={20}>
          <Slider
            range
            min={-2}
            max={0}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksMembraneATPNoName}
          />
        </Col>
        <Col span={4}>
          <span className="slider-label">
            {!status && MarksMembraneATP[value]}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default EffectsBoxATP;
