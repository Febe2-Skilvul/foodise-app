import React, { useContext, useEffect, useState } from 'react';
import { ProgressBar, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { loginCtx } from '../app/context/LoginContext';

import NutritionProgress from './atoms/NutritionProgress';

const TrackNutrition = () => {
  const { user } = useContext(loginCtx);
  const food = useSelector((state) => state.trackDate.track.data);
  const handlePercent = (value, max) => {
    let percent = (value / max) * 100;

    return percent.toFixed(1);
  };
  console.log(food);
  return (
    <Stack className=" w-100 bg-body rounded d-flex flex-column justify-content-between align-items-center gap-5 ">
      <NutritionProgress
        color={'danger'}
        name={'Calori'}
        value={food.totCal}
        percent={handlePercent(food.totCal, user.caloriNeeded)}
        maximum={user.caloriNeeded}
        unit={'kkal'}
        image={'/icons/red-calori.svg'}
      />
      <NutritionProgress
        color={'warning'}
        name={'Lemak'}
        value={food.totFat}
        percent={handlePercent(food.totFat, user.fatNeeded)}
        maximum={user.fatNeeded.toFixed(1)}
        unit={'g'}
        image={'/icons/fat-yellow.svg'}
      />
      <NutritionProgress
        color={'secondary'}
        name={'Karbohydrat'}
        value={food.totCarb}
        percent={handlePercent(food.totCarb, user.carboNeeded)}
        maximum={user.carboNeeded.toFixed(1)}
        unit={'g'}
        image={'/icons/wheat-brown.svg'}
      />
      <NutritionProgress
        color={'success'}
        name={'Protein'}
        value={food.totProtein}
        percent={handlePercent(food.totProtein, user.proteinNeeded)}
        maximum={user.proteinNeeded.toFixed(1)}
        unit={'g'}
        image={'/icons/protein-green.svg'}
      />
    </Stack>
  );
};

export default TrackNutrition;
