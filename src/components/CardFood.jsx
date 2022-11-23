import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardFood = ({ name, img, id, calori, carbon }) => {
  return (
    <Card style={{ width: '20rem', border: 'none' }}>
      <Link to={`/food/${id}`} className="text-decoration-none">
        <Card.Img className="rounded" variant="top" src={img} />
        <Card.Body>
          <div className="d-flex flex-row gap-3">
            <p className="text-calori">{calori} Kkal</p>
            <p className="text-carbon">{carbon} Cho2</p>
          </div>
          <Card.Title className="text-card">{name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardFood;
