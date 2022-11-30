import React, { useContext } from 'react';
import { Row, Stack } from 'react-bootstrap';
import { trackCtx } from '../app/context/TrackContext';
import TrackNull from './atoms/TrackNull';
import TrackCarbon from './TrackCarbon';
import TrackCardio from './TrackCardio';
import TrackFoodList from './TrackFoodList';
import TrackMenu from './TrackMenu';
import TrackNutrition from './TrackNutrition';

const TrackContent = () => {
  const { content, date } = useContext(trackCtx);
  return (
    <>
      {date ? (
        <Stack
          className=" p-0 p-md-5 w-100 bg-body rounded d-flex flex-column justify-content-center align-items-center gap-5 "
          style={{
            marginTop: '100px',
            borderTop: '#f0f0f0 solid 2px',
          }}>
          <TrackMenu />
          <Stack className="w-100">
            {content === 'Nutrition' && <TrackNutrition />}
            {content === 'Foods' && <TrackFoodList />}
            {content === 'Carbon' && <TrackCarbon />}
            {content === 'Cardio' && <TrackCardio />}
          </Stack>
        </Stack>
      ) : (
        <TrackNull />
      )}
    </>
  );
};

export default TrackContent;
