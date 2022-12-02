import { useContext, useEffect } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCtx } from '../app/context/FilterContext';
import { loginCtx } from '../app/context/LoginContext';
import { trackingDay } from '../app/redux/user/TrackingSlice';

import { TextOne } from './atoms/Fonts';
import Icon from './atoms/Icon';
import PortalContainer from './atoms/PortalContainer';

const ServicePortal = () => {
  const { user } = useContext(loginCtx);
  const { update } = useContext(filterCtx);
  const res = useSelector((state) => state.track);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trackingDay(user.token));
  }, [update]);

  return (
    <>
      <Stack
        className=" mb-5 bg-body rounded d-flex flex-column justify-content-between align-items-start gap-5"
        style={{
          marginTop: '50px',
        }}>
        <Stack className="d-flex flex-row justify-content-between">
          <TextOne colored={user.username}>Hii</TextOne>
          <Link to={'/track'} className="text-decoration-none">
            <Button className="button-pill bg-white shadow-sm">
              <Icon image={'/icons/tracking.svg'} />
              <span className="d-none d-md-block">Tracking</span>
            </Button>
          </Link>
        </Stack>
        {res.loading && (
          <PortalContainer calNeed={user.caloriNeeded} />
        )}
        {res.track.data &&
        res.track.data.tracking !== null &&
        !res.loading ? (
          <PortalContainer
            foodToday={res.track.data.tracking.food.length}
            calori={res.track.data.totCal}
            carbon={res.track.data.totCarbon}
            calNeed={user.caloriNeeded}
          />
        ) : (
          !res.loading && (
            <PortalContainer calNeed={user.caloriNeeded} />
          )
        )}
      </Stack>
    </>
  );
};

export default ServicePortal;
