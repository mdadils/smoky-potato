import React, { useCallback, useState } from "react";

import { Slider } from "antd";

import { SliderStateClassMap, Marks3Points } from "../../utils/utils";

const Dopamine = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  const updateValues = useCallback((value) => {
    setSelectedValue(value);
  }, []);

  return (
    <div className={`box ${SliderStateClassMap[selectedValue]}`}>
      <span>Dopamine</span>
      <Slider
        marks={Marks3Points}
        min={-1}
        max={1}
        range
        onChange={updateValues}
        defaultValue={[0]}
        included={true}
      />
    </div>
  );
};

export default Dopamine;
