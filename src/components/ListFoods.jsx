import { useContext, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCtx } from '../app/context/FilterContext';
import { fetchFoods } from '../app/redux/foods/FoodSlice';
import CardFood from './CardFood';

const ListFoods = () => {
  const { query, category } = useContext(filterCtx);
  const data = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods({ query, category }));
  }, [query, category]);

  console.log(data);
  return (
    <>
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
    </>
  );
};

export default ListFoods;
