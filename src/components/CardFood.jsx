import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from './atoms/Icon';

const CardFood = ({ name, img, id, calori, carbon, favorite }) => {
  return (
    <Card
      style={{
        width: '20rem',
        border: 'none',
      }}>
      <Link to={`/home/${id}`} className="text-decoration-none">
        <Card.Img className="rounded" variant="top" src={img} />
        <Card.Body>
          <div className="d-flex flex-row gap-3 justify-content-between align-items-center">
            <div
              className="d-flex flex-row gap-3 align-items-center"
              style={{
                margin: '0',
                height: '50px',
              }}>
              <p className="text-calori">{calori} Kkal</p>
              <p className="text-carbon">{carbon} Cho2</p>
            </div>

            {favorite ? (
              <Button
                variant="light"
                style={{
                  margin: '0',
                }}>
                <Icon image={'/icons/heart-red.svg'} />
              </Button>
            ) : (
              <Button
                variant="light"
                style={{
                  margin: '0',
                }}>
                <Icon image={'/icons/heart-regular.svg'} />
              </Button>
            )}
          </div>
          <Card.Title className="text-card mt-3">{name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardFood;
