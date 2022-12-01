import React from 'react';

const StateRecipe = ({ name, value, unit }) => {
  return (
    <div className="stat">
      <img src="/icons/list-btn.svg" alt="" width={12} height={12} />{' '}
      <p className="stat-title"> {name} : </p>
      <p className="stat-value">
        {value} <span className="stat-unit">{unit}</span>
      </p>
    </div>
  );
};

export default StateRecipe;
