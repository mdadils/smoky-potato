import React, { Component } from "react";
import "./App.css";

// import ConnectElements from "./react-connect-elements";

import FirstColumn from "./components/firstcol";
import SecondCol from "./components/secondCol";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dJ1: 0,
      mPP: 0,
      htrA2: 0,
      trap1: 0,
      uchl1: 0,
      pink1: 0,
      parkin: 0,
      dopamine: 0,
    };
  }

  onPink1Change = (value) => {
    this.setState({ pink1: value });
  };

  onDJ1Change = (value) => {
    this.setState({ dJ1: value });
  };

  onDopChange = (value) => {
    this.setState({ dopamine: value });
  };

  onHtrA2Change = (value) => {
    this.setState({ htrA2: value });
  };

  onParkinChange = (value) => {
    this.setState({ parkin: value });
  };

  onTrap1Change = (value) => {
    this.setState({ trap1: value });
  };

  onUCHL1Change = (value) => {
    this.setState({ uchl1: value });
  };

  onMPPChange = (value) => {
    this.setState({ mPP: value });
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
          onDJ1Change={this.onDJ1Change}
          onDopChange={this.onDopChange}
          onMPPChange={this.onMPPChange}
          onPink1Change={this.onPink1Change}
          onTrap1Change={this.onTrap1Change}
          onHtrA2Change={this.onHtrA2Change}
          onUCHL1Change={this.onUCHL1Change}
          onParkinChange={this.onParkinChange}
        />
        <SecondCol />
      </div>
    );
  }
}

export default App;
