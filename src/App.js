import React, { Component } from "react";
import "./App.css";

// import ConnectElements from "./react-connect-elements";

import FirstColumn from "./components/firstcol";
import SecondCol from "./components/secondCol";

import { initialState } from "./utils/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  onPink1Change = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case -2:
        this.setState({
          pink1: value,
          atp: "Decreases by 60%",
          atpClass: "dec",
          oxygen: "Decreases by 60%",
          oxygenClass: "dec",
          membranePotential: "Decreases by 50%",
          membranePotentialClass: "dec",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          mtIntegrity: "Decreases",
          mtIntegrityClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          calcium: "Efflux decreases",
          calciumClass: "dec",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
        });
        this.onParkinChange([-1], true);
        break;

      case -1:
        this.setState({
          pink1: value,
          atp: "Decreases",
          atpClass: "dec",
          oxygen: "Decreases",
          oxygenClass: "dec",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          mtIntegrity: "Decreases",
          mtIntegrityClass: "dec",
          rOS: "Increases by 180%",
          rOSClass: "inc",
          calcium: "Efflux decreases",
          calciumClass: "dec",
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
        });
        // this.onParkinChange([-1], true);
        break;

      default:
        this.setState({ pink1: value });
        break;
    }
  };

  onDJ1Change = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case -2:
        this.setState({
          dJ1: value,
          atp: "Decreases by 42%",
          atpClass: "dec",
          h2O2: "Increases by 100%",
          h2O2Class: "inc",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          membranePotential: "Decreases by 44%",
          membranePotentialClass: "dec",
          calcium: "Increases",
          calciumClass: "inc",
          rOS: "Increases",
          rOSClass: "inc",
        });
        break;

      case -1:
        this.setState({
          dJ1: value,
          atp: "Decreases",
          atpClass: "dec",
          h2O2: "Increases",
          h2O2Class: "inc",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          calcium: "Increases",
          calciumClass: "inc",
          rOS: "Increases",
          rOSClass: "inc",
        });
        break;

      default:
        this.setState({ dJ1: value });
        break;
    }
  };

  onDopChange = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case -2:
        this.setState({
          dopamine: value,
          calcium: "Increased permeability",
          calciumClass: "inc",
          h2O2: "Increases",
          h2O2Class: "inc",
        });
        break;

      case -1:
        this.setState({
          dopamine: value,
          alphaSyn: "Increases (If Dopamine is below 30%)",
          alphaSynClass: "inc",
        });
        break;

      case 1:
        this.setState({
          dopamine: value,
          rOS: "Increases",
          rOSClass: "inc",
        });
        break;

      default:
        this.setState({ dopamine: value });
        break;
    }
  };

  onHtrA2Change = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case -2:
        this.setState({
          htrA2: value,
          alphaSyn: "Decreases",
          alphaSynClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
        });
        break;

      case -1:
        this.setState({
          htrA2: value,
          alphaSyn: "Decreases",
          alphaSynClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
        });
        break;

      default:
        this.setState({ htrA2: value });
        break;
    }
  };

  onParkinChange = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case -2:
        this.setState({
          parkin: value,
          atp: "Decreases",
          atpClass: "dec",
          dopaN: "Decreases by 20%",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          rOS: "Increases",
          rOSClass: "inc",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
        });
        break;

      case -1:
        this.setState({
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          atp: "Decreases",
          atpClass: "dec",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          up: "Increases",
          upClass: "inc",
          rOS: "Increases",
          rOSClass: "inc",
          parkin: value,
        });
        break;

      default:
        this.setState({ parkin: value });
        break;
    }
  };

  onTrap1Change = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case -2:
        this.setState({
          trap1: value,
          membranePotential: "Decreases by 45%",
          membranePotentialClass: "dec",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          rOS: "Increases",
          rOSClass: "inc",
        });
        break;
      case -1:
        this.setState({
          trap1: value,
          rOS: "Increases by 100%",
          rOSClass: "inc",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
        });
        break;

      default:
        this.setState({ trap1: value });
        break;
    }
  };

  onUCHL1Change = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case -1:
        this.setState({
          uchl1: value,
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
        });
        break;

      default:
        this.setState({ uchl1: value });
        break;
    }
  };

  onMPPChange = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case 1:
        this.setState({
          mPP: value,
          atp: "Decreases (Impaired)",
          atpClass: "dec",
          rOS: "Increases by 40%",
          rOSClass: "inc",
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          calcium: "Increases (Intra-cellular)",
          calciumClass: "inc",
          h2O2: "Increases",
          h2O2Class: "inc",
          dopaN: "Decreases by 25%",
          dopaNClass: "dec",
          apoptosis: "Increases by 60%",
          apoptosisClass: "inc",
        });
        this.onDopChange([1], true);
        break;

      default:
        this.setState({ mPP: value });
        break;
    }
  };

  onRosChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case 0:
        this.resetAll();

        break;
      case 1:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 50%",
        });
        break;
      case 2:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 60%",
        });
        break;
      case 3:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 95%",
          trap1: [-1],
        });
        break;
      case 4:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 100%",
          trap1: [-1],
        });
        break;
      case 5:
        this.setState({
          mPP: [1],
          dJ1: [-1],
          pink1: [-1],
          uchl1: [-1],
          htrA2: [-1],
          trap1: [-1],
          parkin: [-1],
          dopamine: [1],
          rosSlider: value,

          up: "Increases",
          atp: "Decreases",
          h2O2: "increases",
          dopaN: "Decreases",
          oxygen: "Decreases",
          alphaSyn: "Increases",
          apoptosis: "Increases",
          fissionFusion: "Alter",
          mtIntegrity: "Decreases",
          calcium: "Decrease in efflux",
          membranePotential: "Decreases",

          upClass: "inc",
          atpClass: "dec",
          h2O2Class: "inc",
          dopaNClass: "dec",
          oxygenClass: "dec",
          calciumClass: "dec",
          alphaSynClass: "inc",
          apoptosisClass: "inc",
          mtIntegrityClass: "dec",
          fissionFusionClass: "dec",
          membranePotentialClass: "dec",
          mppStatus: "Increases by 200%",
        });
        break;

      case 6:
        this.setState({
          mPP: [1],
          dJ1: [-1],
          pink1: [-1],
          htrA2: [-1],
          uchl1: [-1],
          trap1: [-1],
          parkin: [-1],
          dopamine: [1],
          rosSlider: value,

          up: "Increases",
          atp: "Decreases",
          h2O2: "increases",
          dopaN: "Decreases",
          oxygen: "Decreases",
          alphaSyn: "Increases",
          apoptosis: "Increases",
          fissionFusion: "Alter",
          mtIntegrity: "Decreases",
          calcium: "Decrease in efflux",
          membranePotential: "Decreases",

          upClass: "inc",
          atpClass: "dec",
          h2O2Class: "inc",
          dopaNClass: "dec",
          oxygenClass: "dec",
          calciumClass: "dec",
          alphaSynClass: "inc",
          apoptosisClass: "inc",
          mtIntegrityClass: "dec",
          fissionFusionClass: "dec",
          membranePotentialClass: "dec",
          mppStatus: "Increases by 500%",
        });
        break;
      default:
        this.setState({ rosSlider: value });
        break;
    }
  };

  onMemPotChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case -3:
        this.setState({
          memPotSlider: value,
          pink1: [-2],
          dJ1: [-2],
          trap1: [-2],
          parkin: [-1],
          mPP: [1],
          rOS: "Increases",
          rOSClass: "inc",
          parkinStatus: "Less Phosphorylation",
          atp: "Decreases (Impaired)",
          atpClass: "dec",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          oxygen: "Decreases",
          oxygenClass: "dec",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          apoptosis: "Increases",
          apoptosisClass: "inc",
        });
        break;
      case -2:
        this.setState({
          memPotSlider: value,
          pink1: [-2],
          parkin: [-1],
          dJ1: [-2],
          trap1: [-2],
          mPP: [1],
          rOS: "Increases",
          rOSClass: "inc",
          parkinStatus: "Less Phosphorylation",
          atp: "Decreases by 60%",
          atpClass: "dec",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          oxygen: "Decreases by 60%",
          oxygenClass: "dec",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          apoptosis: "Increases",
          apoptosisClass: "inc",
        });
        break;
      case -1:
        this.setState({
          memPotSlider: value,
          pink1: [-1],
          parkin: [-1],
          dJ1: [-2],
          trap1: [-2],
          rOS: "Increases",
          rOSClass: "inc",
          mPP: [1],
          parkinStatus: "Less Phosphorylation",
          atp: "Decreases by 42%",
          atpClass: "dec",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          oxygen: "Decreases",
          oxygenClass: "dec",
          apoptosis: "Increases",
          apoptosisClass: "inc",
        });
        break;
      case 0:
        this.setState({
          memPotSlider: value,
        });
        break;
      case 1:
        this.setState({
          memPotSlider: value,
          rOS: "Increases",
          rOSClass: "inc",
          //   Show parkinson disease
        });
        break;
      default:
        this.setState({ memPotSlider: value });
        break;
    }
  };

  onAtpSliderChange = (value, skipReset) => {
    !skipReset && this.resetAll();
    this.setState({ atpSlider: value });
  };

  resetAll = () => {
    this.setState({ ...initialState });
  };

  render(props) {
    const {
      dJ1,
      mPP,
      htrA2,
      trap1,
      uchl1,
      pink1,
      parkin,
      dopamine,

      rosSlider,
      memPotSlider,
      atpSlider,

      mppStatus,
      parkinStatus,

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
    } = this.state;
    return (
      <div className="app-container">
        <FirstColumn
          dJ1={dJ1}
          mPP={mPP}
          htrA2={htrA2}
          trap1={trap1}
          uchl1={uchl1}
          pink1={pink1}
          parkin={parkin}
          dopamine={dopamine}
          mppStatus={mppStatus}
          parkinStatus={parkinStatus}
          onDJ1Change={this.onDJ1Change}
          onDopChange={this.onDopChange}
          onMPPChange={this.onMPPChange}
          onPink1Change={this.onPink1Change}
          onTrap1Change={this.onTrap1Change}
          onHtrA2Change={this.onHtrA2Change}
          onUCHL1Change={this.onUCHL1Change}
          onParkinChange={this.onParkinChange}
        />
        <SecondCol
          up={up}
          atp={atp}
          rOS={rOS}
          h2O2={h2O2}
          dopaN={dopaN}
          oxygen={oxygen}
          calcium={calcium}
          alphaSyn={alphaSyn}
          rosSlider={rosSlider}
          apoptosis={apoptosis}
          atpSlider={atpSlider}
          mtIntegrity={mtIntegrity}
          memPotSlider={memPotSlider}
          fissionFusion={fissionFusion}
          membranePotential={membranePotential}
          onAtpSliderChange={this.onAtpSliderChange}
          onRosChange={this.onRosChange}
          onMemPotChange={this.onMemPotChange}
          upClass={upClass}
          atpClass={atpClass}
          rOSClass={rOSClass}
          h2O2Class={h2O2Class}
          dopaNClass={dopaNClass}
          oxygenClass={oxygenClass}
          calciumClass={calciumClass}
          alphaSynClass={alphaSynClass}
          apoptosisClass={apoptosisClass}
          mtIntegrityClass={mtIntegrityClass}
          fissionFusionClass={fissionFusionClass}
          membranePotentialClass={membranePotentialClass}
        />
      </div>
    );
  }
}

export default App;
