import React from 'react';
import { Row, Stack } from 'react-bootstrap';
import TrackFoodList from './TrackFoodList';
import TrackMenu from './TrackMenu';

const TrackContent = () => {
  return (
    <Stack
      className=" p-5 w-100 bg-body rounded d-flex flex-column justify-content-center align-items-center gap-5 "
      style={{
        marginTop: '100px',
        borderTop: '#f0f0f0 solid 2px',
      }}>
      <TrackMenu />
      <Stack className="w-100">
        <TrackFoodList />
      </Stack>
    </Stack>
  );
};

export default TrackContent;
