import React from "react";

const EffectsBox = ({ name, status, className }) => {
  return (
    <div className={`effects-box ${name} ${className}`}>
      <div className="name">{name}</div>
      <span className="status">{status}</span>
    </div>
  );
};

export default EffectsBox;
