import React from 'react';
import { Stack } from 'react-bootstrap';
import PortalButton from './PortalButton';

const PortalContainer = ({
  foodToday = 0,
  calori = 0,
  carbon = 0,
  calNeed = 0,
}) => {
  return (
    <Stack className="p-2 p-md-4 d-flex shadow rounded flex-row justify-content-between">
      <PortalButton
        color={'#3BACB6'}
        value={foodToday}
        icon={'/icons/food-bucket.svg'}
        name={'Makanan'}
        path={'/track'}
      />
      <PortalButton
        color={'#FFD12E'}
        value={calori.toFixed(0)}
        icon={'/icons/calory.svg'}
        name={'Kalori'}
        path={'/track'}
      />

      <PortalButton
        color={'#008000'}
        value={carbon}
        icon={'/icons/cloud-gray.svg'}
        name={'Carbon'}
        path={'/track'}
      />
      <PortalButton
        color={'#FF5652'}
        value={calNeed.toFixed(0)}
        icon={'/icons/bullseye.svg'}
        name={'dibutuhkan'}
        path={'/home'}
      />
    </Stack>
  );
};

export default PortalContainer;
