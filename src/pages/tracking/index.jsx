import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TrackContent from '../../components/TrackContent';
import TrackPortal from '../../components/TrackPortal';

const TrackingPage = () => {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <TrackPortal />
        <TrackContent />
      </Col>
    </Row>
  );
};

export default TrackingPage;
