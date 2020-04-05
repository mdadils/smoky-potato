import React from "react";

import MembranePotential from "./MembranePotential";
import AlphaSyn from "./AlphaSyn";
import Apoptosis from "./Apoptosis";
import ATP from "./ATP";
import H2O2 from "./H2O2";
import Calcium from "./Calcium";
import DopaN from "./DopaN";
import FissionFusion from "./FissionFusion";
import ROS from "./ROS";
import UP from "./UP";
import Oxygen from "./Oxygen";
import MTIntegrity from "./MTIntegrity";

const SecondCol = () => {
  return (
    <div className="col-2 box-container" style={{ float: "right" }}>
      <MembranePotential />
      <AlphaSyn />
      <Apoptosis />
      <ATP />
      <H2O2 />
      <DopaN />
      <Calcium />
      <FissionFusion />
      <MTIntegrity />
      <ROS />
      <Oxygen />
      <UP />
    </div>
  );
};

export default SecondCol;
