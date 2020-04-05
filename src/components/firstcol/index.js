import React from "react";

import Pink1 from "./Pink1";
import Parkin from "./Parkin";
import DJ1 from "./DJ1";
import Dopamine from "./Dopamine";
import Trap1 from "./Trap1";
import HtrA2 from "./HtrA2";
import MPP from "./MPP";
import Uchl1 from "./Uchl1";

import "./style.css";

const FirstColumn = () => {
  return (
    <div className="col-1 box-container">
      <Pink1 />
      <Parkin />
      <DJ1 />
      <Trap1 />
      <HtrA2 />
      <Uchl1 />
      <Dopamine />
      <MPP />
    </div>
  );
};

export default FirstColumn;
