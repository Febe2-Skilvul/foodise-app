import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TextOne } from '../../components/atoms/Fonts';
import Features from '../../components/Features';
import Hero from '../../components/Hero';

function LandingPage() {
  return (
    <Row>
      <Hero />
      <div className="mt-5 p-0 p-md-5 d-flex align-items-center flex-column">
        <TextOne colored={'Features'}>Our</TextOne>
        <Features />
      </div>
    </Row>
  );
}

export default LandingPage;
