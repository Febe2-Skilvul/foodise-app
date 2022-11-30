import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryBar from '../../components/CategoryBar';

import ListFoods from '../../components/ListFoods';

import ServicePortal from '../../components/Portal';

const Home = () => {
  const user = 'sherlin';

  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal user={user !== null ? user : ''} />
        <CategoryBar />
        <ListFoods />
      </Col>
    </Row>
  );
};

export default Home;
