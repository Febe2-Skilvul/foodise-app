import { useContext, useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginCtx } from '../app/context/LoginContext';
import { trackingDay } from '../app/redux/user/TrackingSlice';
import { getFavoriteFoods } from '../service/food';
import { TextOne } from './atoms/Fonts';
import Icon from './atoms/Icon';
import Loading from './atoms/Loading';
import PortalButton from './atoms/PortalButton';

const ServicePortal = () => {
  const { user } = useContext(loginCtx);
  const res = useSelector((state) => state.track);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trackingDay());
  }, []);
  console.log(res);
  console.log(user.token);
  return (
    <>
      {res.loading && <Loading />}
      {!res.track.length && !res.loading && !res.error ? (
        <Stack className=" mb-5 bg-body rounded d-flex flex-column justify-content-between align-items-start gap-5">
          <Stack className="d-flex flex-row justify-content-between">
            <TextOne colored={user.username}>Hii</TextOne>
            <Link to={'/track'} className="text-decoration-none">
              <Button className="button-pill bg-white shadow-sm">
                <Icon image={'/icons/tracking.svg'} />
                <span className="d-none d-md-block">Tracking</span>
              </Button>
            </Link>
          </Stack>
          <Stack className="p-2 p-md-4 d-flex shadow rounded flex-row justify-content-between">
            <PortalButton
              color={'#3BACB6'}
              value={
                !res.track.data.length
                  ? 0
                  : res.track.data.tracking.food.length
              }
              icon={'/icons/food-bucket.svg'}
              name={'Food Today'}
              path={'#'}
            />
            <PortalButton
              color={'#FF5652'}
              value={
                !res.track.data.length
                  ? 0
                  : res.track.data.tracking.food.length
              }
              icon={'/icons/calory.svg'}
              name={'Kalori'}
              path={'#'}
            />

            <PortalButton
              color={'#008000'}
              value={
                !res.track.data.length
                  ? 0
                  : res.track.data.tracking.food.length
              }
              icon={'/icons/cloud-gray.svg'}
              name={'Carbon'}
              path={'#'}
            />
            <PortalButton
              color={'#000000'}
              value={
                !res.track.data.length
                  ? 0
                  : res.track.data.tracking.food.length
              }
              icon={'/icons/spoon.svg'}
              name={'Favorite'}
              path={'/favorite'}
            />
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default ServicePortal;
