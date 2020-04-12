import React from "react";
import { Col, Row, Slider } from "antd";

import StatusIcon from "../StatusIcon";
import { MarksROS, MarksRosNoName } from "../../utils/utils";

const EffectsBoxRos = ({ name, status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider ros ${name} ${className}`}>
      <div className="name">{name}</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={20}>
          <Slider
            range
            min={0}
            max={6}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksRosNoName}
          />
        </Col>
        <Col span={4}>
          <span className="slider-label">{!status && MarksROS[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxRos;
