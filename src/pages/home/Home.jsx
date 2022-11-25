import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from '../../app/redux/foods/FoodSlice';
import Category from '../../components/Category';
import ListFoods from '../../components/ListFoods';

import ServicePortal from '../../components/Portal';

const Home = () => {
  const user = 'sherlin';

  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal user={user !== null ? user : ''} />
        <Category />
        <ListFoods />
      </Col>
    </Row>
  );
};

export default Home;
