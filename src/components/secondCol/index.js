import React from "react";

import EffectsBox from "./EffectsBox";

const SecondCol = ({
  up,
  atp,
  rOS,
  h2O2,
  dopaN,
  oxygen,
  calcium,
  alphaSyn,
  apoptosis,
  mtIntegrity,
  fissionFusion,
  membranePotential,

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
      <EffectsBox name="AlphaSyn" status={alphaSyn} className={alphaSynClass} />
      <EffectsBox
        name="Apoptosis"
        status={apoptosis}
        className={apoptosisClass}
      />
      <EffectsBox name="ATP" status={atp} className={atpClass} />
      <EffectsBox name="H2O2" status={h2O2} className={h2O2Class} />
      <EffectsBox name="DopaN" status={dopaN} className={dopaNClass} />
      <EffectsBox name="Calcium" status={calcium} className={calciumClass} />
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
      <EffectsBox name="ROS" status={rOS} className={rOSClass} />
      <EffectsBox name="Oxygen" status={oxygen} className={oxygenClass} />
      <EffectsBox name="UP" status={up} className={upClass} />
    </div>
  );
};

export default SecondCol;
