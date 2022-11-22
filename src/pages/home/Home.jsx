import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import ServicePortal from '../../components/Portal';

const Home = () => {
  const user = 'sherlin';
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal user={user !== null ? user : ''} />
      </Col>
    </Row>
  );
};

export default Home;
