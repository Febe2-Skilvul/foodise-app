import React from 'react';
import { Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CardFoodAdded from './CardFoodAdded';

const TrackFoodList = () => {
  const foods = useSelector(
    (state) => state.trackDate.track.data.tracking.food
  );

  return (
    <Stack className="track-food-container">
      {foods.map((food, i) => {
        return (
          <CardFoodAdded
            key={i}
            image={food.foodId.image}
            calori={food.foodId.cal}
            carbon={food.foodId.carbon}
          />
        );
      })}
    </Stack>
  );
};

export default TrackFoodList;
