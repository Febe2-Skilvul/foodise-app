import React from 'react';
import BoxNutrition from '../../components/atoms/BoxNutrition';

const RecipeNuts = ({ food }) => {
  return (
    <div className="container-nuts">
      <BoxNutrition
        name={'Carbon'}
        value={food.carbon.toFixed(1)}
        color={'#455A64'}
        unit={'kgc02'}
      />
      <BoxNutrition
        color={'#FF5652'}
        name={'Kalori'}
        unit={'kkal'}
        value={food.cal.toFixed(0)}
      />
      <BoxNutrition
        color={'#FFD12E'}
        name={'Lemak'}
        unit={'g'}
        value={food.fat.toFixed(0)}
      />
      <BoxNutrition
        color={'#EBB376'}
        name={'Karbo..'}
        unit={'g'}
        value={food.carb.toFixed(0)}
      />
      <BoxNutrition
        color={'#008000'}
        name={'Protein'}
        unit={'g'}
        value={food.protein.toFixed(0)}
      />
    </div>
  );
};

export default RecipeNuts;
