import React from "react";
import { Col, Row, Slider } from "antd";

import StatusIcon from "../StatusIcon";
import { MarksApop, MarksApopNoName } from "../../utils/utils";

const EffectsBoxApoptosis = ({ name, status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider ${name} ${className}`}>
      <div className="name">{name}</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={16}>
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
        <Col span={7} offset={1}>
          <span className="slider-label">{!status && MarksApop[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxApoptosis;
