import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './atoms/Icon';

const CardRecipe = ({
  name,
  image,
  id,
  carbon,
  calori,
  timeServe,
}) => {
  return (
    <div className="card-recipe">
      <div className="img-recipe">
        <img src={image} alt="" />
      </div>
      <div className="content-recipe">
        <div className="box-recipe">
          <Link
            to={`/recipe/${id}`}
            className="text-decoration-none text-dark">
            <h2>{name}</h2>
          </Link>

          <div className="d-flex flex-row gap-3">
            <div
              style={{
                margin: '0',
                fontSize: '1em',
                color: '#9e9e9e',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
              }}>
              <Icon image={'/icons/clock.svg'} /> {timeServe}m
            </div>
            <div
              style={{
                margin: '0',
                fontSize: '1em',
                color: '#9e9e9e',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
              }}>
              <Icon image={'/icons/cloud-gray.svg'} /> {carbon}
            </div>
            <div
              style={{
                margin: '0',
                fontSize: '1em',
                color: '#9e9e9e',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
              }}>
              <Icon image={'/icons/calory.svg'} /> {calori.toFixed(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
