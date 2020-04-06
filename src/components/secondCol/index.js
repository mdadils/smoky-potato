import React from "react";

import EffectsBox from "./EffectsBox";
import EffectsBoxRos from "./EffectsBoxRos";

const SecondCol = ({
  up,
  atp,
  rOS,
  h2O2,
  dopaN,
  oxygen,
  calcium,
  alphaSyn,
  rosSlider,
  apoptosis,
  mtIntegrity,
  fissionFusion,
  membranePotential,

  onRosChange,

  upClass,
  atpClass,
  rOSClass,
  h2O2Class,
  dopaNClass,
  oxygenClass,
  calciumClass,
  alphaSynClass,
  apoptosisClass,
  mtIntegrityClass,
  fissionFusionClass,
  membranePotentialClass,
}) => {
  return (
    <div className="col-2 box-container" style={{ float: "right" }}>
      <EffectsBox
        name="ΔΨm"
        status={membranePotential}
        className={membranePotentialClass}
      />
      <EffectsBox name="ATP" status={atp} className={atpClass} />
      <EffectsBoxRos
        name="ROS"
        status={rOS}
        value={rosSlider}
        className={rOSClass}
        onChange={onRosChange}
      />

      <EffectsBox
        name="Apoptosis"
        status={apoptosis}
        className={apoptosisClass}
      />
      <EffectsBox name="AlphaSyn" status={alphaSyn} className={alphaSynClass} />
      <EffectsBox name="Calcium" status={calcium} className={calciumClass} />
      <EffectsBox name="DopaN" status={dopaN} className={dopaNClass} />
      <EffectsBox name="H2O2" status={h2O2} className={h2O2Class} />
      <EffectsBox name="Oxygen" status={oxygen} className={oxygenClass} />
      <EffectsBox name="UP" status={up} className={upClass} />

      <EffectsBox
        name="FissionFusion"
        status={fissionFusion}
        className={fissionFusionClass}
      />
      <EffectsBox
        name="MTIntegrity"
        status={mtIntegrity}
        className={mtIntegrityClass}
      />
    </div>
  );
};

export default SecondCol;
