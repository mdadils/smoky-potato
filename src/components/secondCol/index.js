import React from "react";

import EffectsBox from "./EffectsBox";
import EffectsBoxMP from "./EffectsBoxMP";
import EffectsBoxATP from "./EffectsBoxATP";
import EffectsBoxRos from "./EffectsBoxRos";
import EffectsBoxAlphaSyn from "./EffectsBoxAlphaSyn";
import EffectsBoxCalcium from "./EffectsBoxCalcium";
import EffectsBoxDopaN from "./EffectsBoxDopaN";
import EffectsBoxApoptosis from "./EffectsBoxApoptosis";
import EffectsBoxH2O2 from "./EffectsBoxH2O2";

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
  apopSlider,
  mtIntegrity,
  memPotSlider,
  calciumSlider,
  dopaNSlider,
  h2O2Slider,

  fissionFusion,
  alphaSynSlider,
  membranePotential,

  onH2O2SliderChange,
  onDopaNChange,
  onApopSliderChange,
  onCalciumSliderChange,
  onMemPotChange,
  onRosChange,
  atpSlider,
  onAlphaSChange,
  onAtpSliderChange,

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
      <EffectsBoxMP
        name="ΔΨm"
        status={membranePotential}
        value={memPotSlider}
        className={membranePotentialClass}
        onChange={onMemPotChange}
      />
      <EffectsBoxATP
        name="ATP"
        status={atp}
        className={atpClass}
        value={atpSlider}
        onChange={onAtpSliderChange}
      />
      <EffectsBoxRos
        name="ROS"
        status={rOS}
        value={rosSlider}
        className={rOSClass}
        onChange={onRosChange}
      />

      <EffectsBoxApoptosis
        name="Apoptosis"
        status={apoptosis}
        value={apopSlider}
        onChange={onApopSliderChange}
        className={apoptosisClass}
      />
      <EffectsBoxAlphaSyn
        name="AlphaSyn"
        status={alphaSyn}
        value={alphaSynSlider}
        onChange={onAlphaSChange}
        className={alphaSynClass}
      />
      <EffectsBoxCalcium
        name="Calcium"
        status={calcium}
        className={calciumClass}
        onChange={onCalciumSliderChange}
        value={calciumSlider}
      />
      <EffectsBoxDopaN
        name="DopaN"
        status={dopaN}
        className={dopaNClass}
        value={dopaNSlider}
        onChange={onDopaNChange}
      />
      <EffectsBoxH2O2
        name="H2O2"
        status={h2O2}
        className={h2O2Class}
        value={h2O2Slider}
        onChange={onH2O2SliderChange}
      />
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
