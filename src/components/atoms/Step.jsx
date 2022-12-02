import React from 'react';

const Step = ({ index, value }) => {
  return (
    <div className="step">
      <div className="step-number">
        <p>{index}</p>
      </div>
      <p className="step-value">{value}</p>
    </div>
  );
};

export default Step;
