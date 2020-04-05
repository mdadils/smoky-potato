import React, { useCallback, useState } from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks5Points } from "../../utils/utils";

const DJ1 = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  const updateValues = useCallback((value) => {
    setSelectedValue(value);
  }, []);

  return (
    <div className={`box ${SliderStateClassMap[selectedValue]}`}>
      <span>PINK-1</span>
      <Slider
        marks={Marks5Points}
        min={-2}
        max={2}
        range
        onChange={updateValues}
        defaultValue={[0]}
        included={true}
      />
    </div>
  );
};

export default DJ1;
