import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardFeature = ({ logo, title, desc, link }) => {
  return (
    <Card style={{ width: '18rem' }} className="mx-2 text-center">
      <Link to={link} className="text-decoration-none text-dark">
        <Card.Body>
          <img src={logo} alt="" />
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {desc}
          </Card.Subtitle>
          <Card.Link href="#">
            <img src="/icons/chevron-right.svg" alt="" />
          </Card.Link>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardFeature;
