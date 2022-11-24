import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TrackPortal from '../../components/TrackPortal';
import './track.css';

const TrackingPage = () => {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <TrackPortal />
      </Col>
    </Row>
  );
};

export default TrackingPage;
