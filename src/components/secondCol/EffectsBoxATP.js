import React from "react";
import { Col, Row, Slider } from "antd";

import StatusIcon from "../StatusIcon";
import { MarksATP, MarksATPNoName } from "../../utils/utils";

const EffectsBoxATP = ({ status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider ATP ${className}`} id="atp">
      <div className="name">ATP</div>
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
            marks={MarksATPNoName}
          />
        </Col>
        <Col span={4}>
          <span className="slider-label">{!status && MarksATP[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxATP;
