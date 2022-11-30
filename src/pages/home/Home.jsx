import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../../app/context/LoginContext';
import { trackingDay } from '../../app/redux/user/TrackingSlice';
import CategoryBar from '../../components/CategoryBar';

import ListFoods from '../../components/ListFoods';

import ServicePortal from '../../components/Portal';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useContext(loginCtx);

  useEffect(() => {
    dispatch(trackingDay(user.token));
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
