import React from "react";

import Factors4Points from "./Factors4Points";
import Factors2Points from "./Factors2Points";
import Factors4PointsOX from "./Factors4Points_Ox";

import "./style.css";

const FirstColumn = ({
  dJ1,
  mPP,
  htrA2,
  trap1,
  uchl1,
  pink1,
  parkin,
  dopamine,
  mppStatus,
  onDJ1Change,
  onDopChange,
  htrA2Status,
  dJ1Status,
  onMPPChange,
  parkinStatus,
  onPink1Change,
  onTrap1Change,
  onHtrA2Change,
  onUCHL1Change,
  dopamineStatus,
  onParkinChange,
}) => {
  return (
    <div className="col-1 box-container">
      <Factors4Points
        name="PINK1"
        onChange={onPink1Change}
        value={pink1}
        id="pink1"
      />
      <Factors4Points
        id="parkin"
        name="PARKIN"
        value={parkin}
        onChange={onParkinChange}
        status={parkinStatus}
      />
      <Factors4Points
        id="dj1"
        name="DJ1"
        onChange={onDJ1Change}
        value={dJ1}
        status={dJ1Status}
      />
      <Factors4Points
        name="TRAP1"
        onChange={onTrap1Change}
        value={trap1}
        id="trap1"
      />
      <Factors4Points
        id="HTRA2"
        name="HTRA2"
        onChange={onHtrA2Change}
        value={htrA2}
        status={htrA2Status}
      />
      <Factors4Points
        name="UCHL1"
        onChange={onUCHL1Change}
        value={uchl1}
        id="uchl1"
      />
      <Factors4PointsOX
        name="Dopamine"
        id="dopamine"
        onChange={onDopChange}
        value={dopamine}
        status={dopamineStatus}
      />
      <Factors2Points
        id="mpp"
        name="MPP⁺"
        onChange={onMPPChange}
        value={mPP}
        status={mppStatus}
      />
    </div>
  );
};

export default FirstColumn;
