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
import EffectsBoxOxygen from "./EffectsBoxOxygen";
import EffectsBoxUP from "./EffectsBoxUP";
import EffectsBoxFissionFusion from "./EffectsBoxFissionFusion";
import EffectsBoxPTPore from "./EffectsBoxPTPore";

const SecondCol = ({
  up,
  atp,
  rOS,
  h2O2,
  ptp,
  dopaN,
  oxygen,
  calcium,
  alphaSyn,
  uPSlider,
  rosSlider,
  apoptosis,
  apopSlider,
  dopaNSlider,
  mtIntegrity,
  memPotSlider,
  h2O2Slider,
  fissionFusionSlider,
  oxygenSlider,
  ptpSlider,
  calciumSlider,

  fissionFusion,
  alphaSynSlider,
  membranePotential,

  onH2O2SliderChange,
  onUPSliderChange,
  onDopaNChange,
  onPTPChange,
  onApopSliderChange,
  onCalciumSliderChange,
  onOxygenSliderChange,
  onMemPotChange,
  onRosChange,
  atpSlider,
  onAlphaSChange,
  onAtpSliderChange,
  onFissionFusionChange,

  upClass,
  atpClass,
  rOSClass,
  h2O2Class,
  dopaNClass,
  oxygenClass,
  calciumClass,
  alphaSynClass,
  apoptosisClass,
  ptpClass,
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
      <EffectsBoxApoptosis
        name="Apoptosis"
        status={apoptosis}
        value={apopSlider}
        onChange={onApopSliderChange}
        className={apoptosisClass}
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
      <EffectsBoxOxygen
        name="Oxygen"
        status={oxygen}
        className={oxygenClass}
        value={oxygenSlider}
        onChange={onOxygenSliderChange}
      />
      <EffectsBoxUP
        name="UP"
        onChange={onUPSliderChange}
        status={up}
        className={upClass}
        value={uPSlider}
      />
      <EffectsBoxPTPore
        name="PTP Opening"
        onChange={onPTPChange}
        status={ptp}
        className={ptpClass}
        value={ptpSlider}
      />
      <EffectsBoxFissionFusion
        name="FissionFusion"
        onChange={onFissionFusionChange}
        status={fissionFusion}
        className={fissionFusionClass}
        value={fissionFusionSlider}
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
