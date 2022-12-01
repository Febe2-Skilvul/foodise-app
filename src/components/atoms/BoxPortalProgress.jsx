import React from 'react';
import { Stack } from 'react-bootstrap';
import CircleProgress from './CircleProgress';

const BoxPortalProgress = ({
  foodToday = 0,
  carbonToday = 0,
  caloriToday = 0,
  caloriNeed = 4,
  carbonNeed = 4,
}) => {
  return (
    <>
      <Stack className="d-md-flex shadow rounded flex-row  justify-content-center w-100 box-circle-progress d-none ">
        <CircleProgress
          color={'#227880'}
          name="Foods"
          value={foodToday}
          percent={(foodToday / 4) * 100}
        />
        <CircleProgress
          color={'#455A64'}
          name="Carbon"
          value={carbonToday}
          percent={(carbonToday / 2) * 100}
          unit="kgc02"
        />
        <CircleProgress
          color={'#FF5652'}
          name="Calori"
          value={caloriToday.toFixed(0)}
          percent={(caloriToday / caloriNeed) * 100}
          unit="Kkal"
        />
      </Stack>
      <Stack className="d-flex d-md-none shadow rounded flex-row  justify-content-center">
        <CircleProgress
          color={'#455A64'}
          name="Carbon"
          value={carbonToday}
          percent={(carbonToday / 2) * 100}
          unit="kgc02"
        />
        <CircleProgress
          color={'#FF5652'}
          name="Calori"
          value={caloriToday.toFixed(0)}
          percent={(caloriToday / caloriNeed) * 100}
          unit="Kkal"
        />
      </Stack>
    </>
  );
};

export default BoxPortalProgress;
