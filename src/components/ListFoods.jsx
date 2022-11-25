import { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from '../app/redux/foods/FoodSlice';

import { fakeData } from '../config/foods';
import CardFood from './CardFood';

const ListFoods = () => {
  const foods = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods({ queri: 'cake', category: 'dessert' }));
  }, []);

  console.log(foods);
  return (
    <>
      <Stack
        className="flex-row flex-wrap justify-content-center gap-5"
        style={{
          marginTop: '50px',
        }}>
        {foods.foods.map((food, i) => {
          const calori = food.nutrition.nutrients[0].amount;
          const carbon = food.nutrition.nutrients[1].amount;
          return (
            <CardFood
              key={i}
              name={food.title}
              id={food.id}
              img={food.image}
              calori={calori}
              carbon={carbon}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default ListFoods;
