import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TextOne } from '../../components/atoms/Fonts';
import Features from '../../components/Features';
import Hero from '../../components/Hero';
import RecommendedFood from '../../components/RecommendedFood';

const LandingPage = () => {
  return (
    <Row>
      <Hero />
      <div className="mt-5  p-md-5 d-flex align-items-center flex-column .section-landingpage gap-5">
        <TextOne colored={'Features'}>Our</TextOne>
        <Features />
      </div>
      <div className="mt-5 p-md-5 d-flex align-items-center flex-column section-landingpage gap-5">
        <TextOne colored={'Foods'}>Our</TextOne>
        <RecommendedFood />
      </div>
    </Row>
  );
};

export default LandingPage;
