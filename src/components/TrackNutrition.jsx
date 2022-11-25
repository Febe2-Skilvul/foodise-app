import React, { useEffect, useState } from 'react';
import { ProgressBar, Stack } from 'react-bootstrap';
import NutritionProgress from './atoms/NutritionProgress';

const TrackNutrition = () => {
  return (
    <Stack className=" w-100 bg-body rounded d-flex flex-column justify-content-between align-items-center gap-5 ">
      <NutritionProgress
        color={'danger'}
        name={'Calori'}
        value={1001}
        percent={54}
        maximum={2000}
        unit={'kkal'}
        image={'/icons/red-calori.svg'}
      />
      <NutritionProgress
        color={'warning'}
        name={'Lemak'}
        value={101}
        percent={67}
        maximum={200}
        unit={'g'}
        image={'/icons/fat-yellow.svg'}
      />
      <NutritionProgress
        color={'secondary'}
        name={'Karbohydrat'}
        value={171}
        percent={47}
        maximum={340}
        unit={'g'}
        image={'/icons/wheat-brown.svg'}
      />
      <NutritionProgress
        color={'success'}
        name={'Protein'}
        value={271}
        percent={77}
        maximum={440}
        unit={'g'}
        image={'/icons/protein-green.svg'}
      />
    </Stack>
  );
};

export default TrackNutrition;
