const CircleProgress = ({ name, percent, value, color, unit }) => {
  return (
    <div className="card-track">
      <div
        className="percent"
        style={{
          '--clr': color,
          '--num': percent < 100 ? percent : 100,
        }}>
        <dot className="dot"></dot>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <div className="number">
          <h2>{value}</h2>
          <span>{unit}</span>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
