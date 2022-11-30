import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './atoms/Icon';

const CardRecipe = ({ name, image, id }) => {
  return (
    <div className="card-recipe">
      <div className="img-recipe">
        <img src={image} alt="" />
      </div>
      <div className="content-recipe">
        <div className="box-recipe">
          <Link
            to={'/recipe/:7y97ee0090p'}
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
              <Icon image={'/icons/clock.svg'} /> 15m
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
              <Icon image={'/icons/cloud-gray.svg'} /> 1.3
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
              <Icon image={'/icons/calory.svg'} /> 107
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
