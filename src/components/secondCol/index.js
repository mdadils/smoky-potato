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
}) => {
  return (
    <div className="col-2 box-container" style={{ float: "right" }}>
      <EffectsBox name="ΔΨm" status={membranePotential} />
      <EffectsBox name="AlphaSyn" status={alphaSyn} />
      <EffectsBox name="Apoptosis" status={apoptosis} />
      <EffectsBox name="ATP" status={atp} />
      <EffectsBox name="H2O2" status={h2O2} />
      <EffectsBox name="DopaN" status={dopaN} />
      <EffectsBox name="Calcium" status={calcium} />
      <EffectsBox name="FissionFusion" status={fissionFusion} />
      <EffectsBox name="MTIntegrity" status={mtIntegrity} />
      <EffectsBox name="ROS" status={rOS} />
      <EffectsBox name="Oxygen" status={oxygen} />
      <EffectsBox name="UP" status={up} />
    </div>
  );
};

export default SecondCol;
