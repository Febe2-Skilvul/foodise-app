import React, { useContext, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCtx } from '../../app/context/FilterContext';
import { loginCtx } from '../../app/context/LoginContext';
import { fetchFavorite } from '../../app/redux/favorites/FavoriteSlice';
import Loading from '../../components/atoms/Loading';
import TrackNull from '../../components/atoms/TrackNull';
import CardFood from '../../components/CardFood';

const ListFavoriteFood = () => {
  const res = useSelector((state) => state.favorite);
  const { user } = useContext(loginCtx);
  const { favUpdate } = useContext(filterCtx);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorite({ token: user.token }));
  }, [favUpdate]);

  return (
    <Stack
      className="p-3  flex-row flex-wrap justify-content-center gap-5"
      style={{
        marginTop: '50px',
      }}>
      {res.loading && <Loading />}
      {res.foods && !res.loading
        ? res.foods.map((favorite, i) => {
            return (
              <CardFood
                key={i}
                name={favorite.food.name}
                id={favorite.food._id}
                img={favorite.food.image}
                calori={favorite.food.cal}
                carbon={favorite.food.carbon}
                favorite={true}
                id_fav={favorite._id}
              />
            );
          })
        : !res.loading && <TrackNull />}
    </Stack>
  );
};

export default ListFavoriteFood;
