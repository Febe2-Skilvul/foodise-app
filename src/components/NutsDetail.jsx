import React from 'react';
import { Stack } from 'react-bootstrap';
import Nutrition from './Nutrition';

const NutsDetail = ({ cal, fat, carb, protein }) => {
  return (
    <Stack className="mt-5 gap-4">
      <Nutrition
        icon={'/icons/fire-cal.svg'}
        name={'Kalori'}
        value={`${cal} kkal`}
      />

      <Nutrition
        icon={'/icons/cloud-meatball.svg'}
        name={'Lemak'}
        value={`${fat} g`}
      />

      <Nutrition
        icon={'/icons/wheat-awn.svg'}
        name={'Karbohydrates'}
        value={`${carb} g`}
      />

      <Nutrition
        icon={'/icons/dna.svg'}
        name={'Protein'}
        value={`${protein} g`}
      />
    </Stack>
  );
};

export default NutsDetail;
