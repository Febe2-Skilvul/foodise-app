import React from 'react';
import { Stack } from 'react-bootstrap';
import { features } from '../config';
import CardFeature from './CardFeature';

function Features() {
  return (
    <Stack className="d-flex flex-wrap flex-md-row justify-content-center gap-3 align-items-center mt-3">
      {features.map((card, i) => (
        <CardFeature
          title={card.title}
          logo={card.logo}
          desc={card.desc}
          key={i}
          link={card.link}
        />
      ))}
    </Stack>
  );
}

export default Features;
