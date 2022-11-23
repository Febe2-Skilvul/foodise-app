import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const PortalButton = ({ color, value, icon, name, path }) => {
  return (
    <Link to={path} className="text-decoration-none">
      <div
        style={{
          maxWidth: '200px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: '#fff',
          padding: '2em',
          gap: '15px',
        }}>
        <p
          style={{
            color: `${color}`,
            fontSize: '24px',
            margin: '0',
          }}>
          {value}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '0',
            gap: '15px',
            alignItems: 'center',
          }}>
          <Icon image={icon} />
          <p
            style={{
              color: '#9e9e9e',
              fontSize: '16px',
              fontWeight: '500',
              margin: '0',
            }}
            className="d-none d-md-block">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PortalButton;
