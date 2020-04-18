import React from "react";

const Predictor = ({ indicator }) => {
  return (
    <div className="prediction-wrp">
      Prediction
      <div>{indicator}</div>
    </div>
  );
};

export default Predictor;
