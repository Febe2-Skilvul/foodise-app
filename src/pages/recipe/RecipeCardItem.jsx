import React from 'react';
import StateRecipe from './StateRecipe';

const RecipeCardItem = ({
  image,
  name,
  portion,
  time,
  step,
  ingredients,
}) => {
  return (
    <div className="recipe-stats">
      <div className="r-item-image">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="stats">
        <p className="recipe-name">{name}</p>

        <StateRecipe name={'Waktu Masak'} value={time} unit={'min'} />
        <StateRecipe name={'Porsi'} value={portion} unit={'porsi'} />
        <StateRecipe name={'Langkah'} value={step} unit={'step'} />
        <StateRecipe
          name={'Bahan'}
          value={ingredients}
          unit={'bahan'}
        />
      </div>
    </div>
  );
};

export default RecipeCardItem;
