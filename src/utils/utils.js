export const SliderStateClassMap = {
  "-2": "mutate",
  "-1": "low",
  0: "normal",
  1: "high",
  2: "oe",
};

export const Marks4Points = {
  "-2": "Mutate",
  "-1": "Low",
  0: "Normal",
  1: "OE",
};
export const MarksROS = {
  0: "Normal",
  1: "25%",
  2: "40%",
  3: "100%",
  4: "110%",
  5: "180%",
  6: "250%",
};

export const MarksRosNoName = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
};

export const MarksATP = {
  "-2": "-60%",
  "-1": "-42%",
  0: "Normal",
};
export const MarksMembraneAlphaSyn = {
  "-1": "Very Low",
  0: "Normal",
  1: "Increased Aggregation",
};

export const MarksCalcium = {
  0: "Normal",
  1: "High intracellular",
};

export const MarksDopaN = {
  "-1": "Decreased",
  0: "Normal",
};

export const MarksDopaNNoName = {
  "-1": "",
  0: "",
};
export const MarksApop = {
  0: "Normal",
  1: "Increased",
};

export const MarksApopNoName = {
  0: "",
  1: "",
};

export const MarksATPNoName = {
  "-2": "",
  "-1": "",
  0: "",
};

export const MarksMembranePot = {
  "-3": "-60%",
  "-2": "-50%",
  "-1": "-45%",
  0: "Normal",
  1: "26%",
};

export const MarksMembranePotNoName = {
  "-3": "",
  "-2": "",
  "-1": "",
  0: "",
  1: "",
};

export const Marks4PointsOxidized = {
  "-2": "Oxidized",
  "-1": "Low",
  0: "Normal",
  1: "High",
};

export const Marks2Points = {
  0: "Absent",
  1: "Present",
};

export const MarksPTP = {
  0: "Normal",
  1: "Pathological",
};

export const MarksC1 = {
  "-6": "-70%",
  "-5": "-63%",
  "-4": "-50%",
  "-3": "-41%",
  "-2": "-36%",
  "-1": "-25%",
  "0": "Normal",
};

export const MarksC1NoName = {
  "-6": "",
  "-5": "",
  "-4": "",
  "-3": "",
  "-2": "",
  "-1": "",
  "0": "",
};

export const initialState = {
  dJ1: 0,
  mPP: 0,
  htrA2: 0,
  trap1: 0,
  uchl1: 0,
  pink1: 0,
  parkin: 0,
  dopamine: 0,

  c1Slider: 0,
  h2O2Slider: 0,
  atpSlider: 0,
  rosSlider: 0,
  apopSlider: 0,
  memPotSlider: 0,
  alphaSynSlider: 0,
  ptpSlider: 0,
  calciumSlider: 0,
  dopaNSlider: 0,
  oxygenSlider: 0,
  uPSlider: 0,
  fissionFusionSlider: 0,

  dJ1Status: "",
  dopamineStatus: "",
  mppStatus: "",
  htrA2Status: "",
  parkinStatus: "",

  c1: "",
  ptp: "",
  up: "",
  atp: "",
  rOS: "",
  h2O2: "",
  dopaN: "",
  oxygen: "",
  calcium: "",
  alphaSyn: "",
  apoptosis: "",
  mtIntegrity: "",
  fissionFusion: "",
  membranePotential: "",

  c1Class: "",
  upClass: "",
  ptpClass: "",
  atpClass: "",
  rOSClass: "",
  h2O2Class: "",
  dopaNClass: "",
  oxygenClass: "",
  calciumClass: "",
  alphaSynClass: "",
  apoptosisClass: "",
  mtIntegrityClass: "",
  fissionFusionClass: "",
  membranePotentialClass: "",
};
