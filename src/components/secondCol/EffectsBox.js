import React from "react";

const EffectsBox = ({ name, status }) => {
  return (
    <div className={`effects-box ${name}`}>
      <div>{name}</div>
      <span className="status">{status}</span>
    </div>
  );
};

export default EffectsBox;
