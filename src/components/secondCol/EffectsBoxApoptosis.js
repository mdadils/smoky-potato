import React from "react";
import { Col, Row, Slider } from "antd";

import { MarksMembraneApop, MarksMembraneApopNoName } from "../../utils/utils";

const EffectsBoxApoptosis = ({ name, status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider mem-pot ${name} ${className}`}>
      <div>{name}</div>
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
            marks={MarksMembraneApopNoName}
          />
        </Col>
        <Col span={7} offset={1}>
          <span className="slider-label">
            {!status && MarksMembraneApop[value]}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default EffectsBoxApoptosis;
