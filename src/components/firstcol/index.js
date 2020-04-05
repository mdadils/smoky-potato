import React from "react";

import Factors5Points from "./Factors5Points";
import Factors3Points from "./Factors3Points";

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
  onDJ1Change,
  onDopChange,
  onMPPChange,
  onPink1Change,
  onTrap1Change,
  onHtrA2Change,
  onUCHL1Change,
  onParkinChange,
}) => {
  return (
    <div className="col-1 box-container">
      <Factors5Points name="Pink1" onChange={onPink1Change} value={pink1} />
      <Factors5Points name="Parkin" onChange={onParkinChange} value={parkin} />
      <Factors5Points name="DJ1" onChange={onDJ1Change} value={dJ1} />
      <Factors5Points name="Trap1" onChange={onTrap1Change} value={trap1} />
      <Factors5Points name="HtrA2" onChange={onHtrA2Change} value={htrA2} />
      <Factors5Points name="Uchl1" onChange={onUCHL1Change} value={uchl1} />
      <Factors3Points name="Dopamine" onChange={onDopChange} value={dopamine} />
      <Factors3Points name="mPP" onChange={onMPPChange} value={mPP} />
    </div>
  );
};

export default FirstColumn;
