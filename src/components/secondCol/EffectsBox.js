import React from "react";

const EffectsBox = ({ name, status, className, id }) => {
  return (
    <div className={`effects-box ${name} ${className}`} id={id}>
      <div className="name">{name}</div>
      <span className="status">{status}</span>
    </div>
  );
};

export default EffectsBox;
