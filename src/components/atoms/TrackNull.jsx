import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TrackNull = ({ message }) => {
  return (
    <div className="col mt-5 d-flex w-100 flex-column justify-content-center align-items-center mb-5 alert-null ">
      <img
        src="/images/track-not-found.png"
        className="img-thumbnail"
        width="300"
        height="300"
        alt=""
        style={{
          border: 'none',
        }}
      />
      <p
        style={{
          fontSize: '1.5em',
          color: '#000',
        }}>
        {message}
      </p>
      <Link to={'/home'} className="text-decoration-none">
        <Button className="button-main">Home</Button>
      </Link>
    </div>
  );
};

export default TrackNull;
