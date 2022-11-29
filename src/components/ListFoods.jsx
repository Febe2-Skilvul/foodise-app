import { useContext, useEffect, useState } from 'react';
import { Spinner, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCtx } from '../app/context/FilterContext';
import { fetchFoods } from '../app/redux/foods/FoodSlice';
import Loading from './atoms/Loading';
import Notfound from './atoms/NotFound';
import CardFood from './CardFood';

const ListFoods = () => {
  const { query, category } = useContext(filterCtx);
  const data = useSelector((state) => state.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods({ query }));
  }, [query, category]);

  console.log(data.foods);
  return (
    <>
      {data.loading && <Loading />}
      {!data.loading && data.foods.length ? (
        <Stack
          className="flex-row flex-wrap justify-content-center gap-5"
          style={{
            marginTop: '50px',
          }}>
          {data.foods.map((food, i) => {
            return (
              <CardFood
                key={i}
                name={food.name}
                id={food._id}
                img={food.image}
                calori={food.cal}
                carbon={food.carb}
              />
            );
          })}
        </Stack>
      ) : (
        !data.loading && <Notfound />
      )}
    </>
  );
};

export default ListFoods;
