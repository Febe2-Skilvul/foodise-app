import React from 'react';
import { Stack } from 'react-bootstrap';
import CardFoodAdded from './CardFoodAdded';

const TrackFoodList = () => {
  return (
    <Stack className="track-food-container">
      <CardFoodAdded />
      <CardFoodAdded />
    </Stack>
  );
};

export default TrackFoodList;
