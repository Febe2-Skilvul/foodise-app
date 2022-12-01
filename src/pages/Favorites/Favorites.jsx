import { useCallback, useContext, useEffect, useState } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { loginCtx } from '../../app/context/LoginContext';
import CardFood from '../../components/CardFood';
import ServicePortal from '../../components/Portal';

import ListFavoriteFood from './ListFavoriteFood';

const Favorites = () => {
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal />
        <ListFavoriteFood />
      </Col>
    </Row>
  );
};

export default Favorites;
