import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { trackingDay } from '../../app/redux/user/TrackingSlice';
import CategoryBar from '../../components/CategoryBar';

import ListFoods from '../../components/ListFoods';

import ServicePortal from '../../components/Portal';

const Home = () => {
  const user = 'sherlin';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trackingDay());
  }, []);
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal />
        <CategoryBar />
        <ListFoods />
      </Col>
    </Row>
  );
};

export default Home;
