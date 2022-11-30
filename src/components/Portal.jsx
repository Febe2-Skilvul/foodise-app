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
import TrackNull from './atoms/TrackNull';

const ServicePortal = () => {
  const { user } = useContext(loginCtx);
  const res = useSelector((state) => state.track);

  return (
    <>
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
            value={0}
            icon={'/icons/food-bucket.svg'}
            name={'Food Today'}
            path={'#'}
          />
          <PortalButton
            color={'#FF5652'}
            value={0}
            icon={'/icons/calory.svg'}
            name={'Kalori'}
            path={'#'}
          />

          <PortalButton
            color={'#008000'}
            value={0}
            icon={'/icons/cloud-gray.svg'}
            name={'Carbon'}
            path={'#'}
          />
          <PortalButton
            color={'#000000'}
            value={0}
            icon={'/icons/spoon.svg'}
            name={'Favorite'}
            path={'/favorite'}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ServicePortal;
