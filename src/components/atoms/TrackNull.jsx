import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TrackNull = () => {
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
      <Link to={'/home'} className="text-decoration-none">
        <Button className="button-main">Home</Button>
      </Link>
    </div>
  );
};

export default TrackNull;
