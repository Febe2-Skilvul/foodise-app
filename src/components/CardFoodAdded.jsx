const CardFoodAdded = ({ image, calori, carbon, name }) => {
  return (
    <div className="d-flex flex-row shadow rounded p-3 track-food-box">
      <div className="box-left">
        <img src={image} alt="" width={150} height={100} />
        <p>{name}</p>
      </div>

      <div className="track-food-nutri">
        <p>
          +{calori} <span>kkal</span>
        </p>
        <p>
          +{carbon} <span>kgc02</span>
        </p>
      </div>
    </div>
  );
};

export default CardFoodAdded;
