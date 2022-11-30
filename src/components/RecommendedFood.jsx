import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fakeData } from '../config/foods';
import { TextOne } from './atoms/Fonts';
import CardFood from './CardFood';

const RecommendedFood = () => {
  return (
    <>
      <Stack className="recommended-box">
        {fakeData.map((food, i) => {
          if (i < 4) {
            return (
              <CardFood
                key={i}
                name={food.title}
                id={food.id}
                img={food.image}
                calori={20.33}
                carbon={0.45}
              />
            );
          }
        })}
      </Stack>
      <Link to="/home" className="text-decoration-none">
        <Button className="button-out-main">MORE</Button>
      </Link>
    </>
  );
};

export default RecommendedFood;
