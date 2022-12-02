import React from 'react';

const BoxNutrition = ({ unit, value, color, name }) => {
  return (
    <div className="box-nuts">
      <p className="val">
        {value} <span className="nuts">{unit}</span>
      </p>
      <p
        className="name"
        style={{
          color: color,
        }}>
        {name}
      </p>
    </div>
  );
};

export default BoxNutrition;
