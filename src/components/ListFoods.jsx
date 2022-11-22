import { Stack } from 'react-bootstrap';

import { fakeData } from '../config/foods';
import CardFood from './CardFood';

const ListFoods = () => {
  // console.log(foods);
  return (
    <>
      <Stack
        className="flex-row flex-wrap justify-content-center gap-5"
        style={{
          marginTop: '50px',
        }}>
        {fakeData.map((food, i) => {
          return (
            <CardFood
              key={i}
              name={food.title}
              id={food.id}
              img={food.image}
              calori={230}
              carbon={20}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default ListFoods;
