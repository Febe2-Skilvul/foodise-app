import { useContext, useEffect, useState } from 'react';
import { Spinner, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCtx } from '../app/context/FilterContext';
import { loginCtx } from '../app/context/LoginContext';
import { fetchFoods } from '../app/redux/foods/FoodSlice';
import Loading from './atoms/Loading';
import Notfound from './atoms/NotFound';
import CardFood from './CardFood';

const ListFoods = () => {
  const { query } = useContext(filterCtx);
  const { user } = useContext(loginCtx);
  const data = useSelector((state) => state.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods({ query, token: user.token }));
  }, [query]);

  return (
    <>
      {data.loading && <Loading />}
      {!data.loading && data.foods.length ? (
        <Stack
          className="flex-row flex-wrap justify-content-center align-items-center gap-5 w-100"
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
                carbon={food.carbon}
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
