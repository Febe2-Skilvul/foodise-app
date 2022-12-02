import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardFood from './CardFood';
import RecomDefault from '../config/foods';

const RecommendedFood = () => {
  return (
    <>
      <Stack className="recommended-box">
        {RecomDefault.map((food, i) => {
          return (
            <CardFood
              key={i}
              name={food.name}
              id={food._id}
              img={food.image}
              calori={food.cal}
              carbon={food.carbon}
            />
          );
        })}
      </Stack>
      <Link to="/home" className="text-decoration-none">
        <Button className="button-out-main">MORE</Button>
      </Link>
    </>
  );
};

export default RecommendedFood;
