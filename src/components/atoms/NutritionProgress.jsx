import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Icon from './Icon';

const NutritionProgress = ({
  color,
  name,
  value,
  percent,
  maximum,
  unit,
  image,
}) => {
  let [now, setNow] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      return setNow(percent);
    }, [1000]);
  }, []);
  return (
    <div className="nutrition-track-box">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2">
        <Icon image={image} />
        <div className="d-flex flex-column">
          <p className="name-nutrition">{name}</p>
          <p className="value-nutrition">
            {value} <span>{unit}</span>
          </p>
        </div>
      </div>
      <div className="w-75 start">
        <ProgressBar
          min={0}
          now={now}
          label={`${now}%`}
          variant={color}
          style={{
            height: '30px',
          }}
        />
      </div>

      <p className="value-nutrition">
        {maximum} <span>{unit}</span>{' '}
      </p>
    </div>
  );
};

export default NutritionProgress;
