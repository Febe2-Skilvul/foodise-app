import React from 'react';
import { Card } from 'react-bootstrap';

const CardFeature = ({ logo, title, desc }) => {
  return (
    <Card style={{ width: '18rem' }} className="mx-2 text-center">
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
    </Card>
  );
};

export default CardFeature;
