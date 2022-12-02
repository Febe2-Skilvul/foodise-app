import { useContext, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCtx } from '../app/context/FilterContext';
import { filterFoods } from '../app/redux/foods/FilterSlice';
import Loading from './atoms/Loading';
import Notfound from './atoms/NotFound';
import CardFood from './CardFood';

const FoodsCategory = () => {
  const { category } = useContext(filterCtx);
  const data = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterFoods({ category }));
  }, [category]);

  return (
    <>
      {data.loading && <Loading />}
      {!data.loading && data.foods.length ? (
        <Stack
          className="flex-row flex-wrap justify-content-center gap-5 w-100 align-items-center"
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

export default FoodsCategory;
