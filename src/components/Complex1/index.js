import React from "react";
import { Col, Row, Slider } from "antd";

import { MarksC1, MarksC1NoName } from "../../utils/utils";

const Complex1 = ({ name, status, className, value, onChange }) => {
  return (
    <div className={`c1 box with-slider effects-box ${name} ${className}`}>
      <div>{name}</div>
      <div className="status">{status}</div>
      <Row gutter={16}>
        <Col span={20}>
          <Slider
            range
            min={-6}
            max={0}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksC1NoName}
          />
        </Col>
        <Col span={4}>
          <span className="slider-label">{MarksC1[value]}</span>
        </Col>
      </Row>
    </div>
  );
};

export default Complex1;
