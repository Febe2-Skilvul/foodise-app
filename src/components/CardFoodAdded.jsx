const CardFoodAdded = () => {
  return (
    <div className="d-flex flex-row shadow rounded p-3 track-food-box">
      <div className="box-left">
        <img
          src="https://spoonacular.com/recipeImages/715497-312x231.jpg"
          alt=""
          width={100}
          height={100}
        />
        <p>'Berry Banana Breakfast Smoothie'</p>
      </div>

      <div className="track-food-nutri">
        <p>
          +203 <span>kkal</span> Calori
        </p>
        <p>
          +65 <span>kgc02</span> Carbon
        </p>
      </div>
    </div>
  );
};

export default CardFoodAdded;
