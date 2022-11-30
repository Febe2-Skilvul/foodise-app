import React from 'react';
import { Stack } from 'react-bootstrap';
import PortalButton from './PortalButton';

const PortalContainer = ({
  foodToday = 0,
  calori = 0,
  carbon = 0,
  favorite = 0,
}) => {
  return (
    <Stack className="p-2 p-md-4 d-flex shadow rounded flex-row justify-content-between">
      <PortalButton
        color={'#3BACB6'}
        value={foodToday}
        icon={'/icons/food-bucket.svg'}
        name={'Food Today'}
        path={'#'}
      />
      <PortalButton
        color={'#FF5652'}
        value={calori.toFixed(0)}
        icon={'/icons/calory.svg'}
        name={'Kalori'}
        path={'#'}
      />

      <PortalButton
        color={'#008000'}
        value={carbon}
        icon={'/icons/cloud-gray.svg'}
        name={'Carbon'}
        path={'#'}
      />
      <PortalButton
        color={'#000000'}
        value={favorite}
        icon={'/icons/spoon.svg'}
        name={'Favorite'}
        path={'/favorite'}
      />
    </Stack>
  );
};

export default PortalContainer;
