import React from "react";

const EffectsBox = ({ name, status, className }) => {
  return (
    <div className={`effects-box ${name} ${className}`}>
      <div>{name}</div>
      <span className="status">{status}</span>
    </div>
  );
};

export default EffectsBox;
