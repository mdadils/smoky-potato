import React from "react";
import "./App.css";

import FirstColumn from "./components/firstcol";
import SecondCol from "./components/secondCol";

function App() {
  return (
    <div className="app-container">
      <FirstColumn />
      <SecondCol />
    </div>
  );
}

export default App;
