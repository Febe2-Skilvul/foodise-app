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
import PortalContainer from './atoms/PortalContainer';
import TrackNull from './atoms/TrackNull';

const ServicePortal = () => {
  const { user } = useContext(loginCtx);
  const res = useSelector((state) => state.track);

  console.log(res);
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
        {res.track ? (
          <PortalContainer
            foodToday={res.track.data.tracking.food.length}
            calori={res.track.data.totCal}
            carbon={res.track.data.totCarbon}
          />
        ) : (
          <PortalContainer />
        )}
      </Stack>
    </>
  );
};

export default ServicePortal;
