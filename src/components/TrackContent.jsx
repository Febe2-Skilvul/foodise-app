import React, { useContext } from 'react';
import { Row, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { trackCtx } from '../app/context/TrackContext';
import TrackNull from './atoms/TrackNull';
import TrackCarbon from './TrackCarbon';
import TrackCardio from './TrackCardio';
import TrackFoodList from './TrackFoodList';
import TrackMenu from './TrackMenu';
import TrackNutrition from './TrackNutrition';

const TrackContent = () => {
  const { content, date } = useContext(trackCtx);
  const res = useSelector((state) => state.trackDate);
  return (
    <>
      {res.loading && null}
      {res.error && null}
      {res.track.data && !res.loading && !res.error ? (
        <Stack
          className=" p-0 p-md-5 w-100 bg-body rounded d-flex flex-column justify-content-center align-items-center gap-5 "
          style={{
            marginTop: '100px',
            borderTop: '#f0f0f0 solid 2px',
          }}>
          <TrackMenu />
          {res.track.data.tracking ? (
            <Stack className="w-100">
              {content === 'Nutrition' && <TrackNutrition />}
              {content === 'Foods' && <TrackFoodList />}
              {content === 'Carbon' && <TrackCarbon />}
              {content === 'Cardio' && <TrackCardio />}
            </Stack>
          ) : (
            <TrackNull />
          )}
        </Stack>
      ) : (
        !res.loading && <TrackNull />
      )}
    </>
  );
};

export default TrackContent;
