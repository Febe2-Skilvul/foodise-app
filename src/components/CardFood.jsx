import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from './atoms/Icon';

const CardFood = ({ name, img, id, calori, carbon, favorite }) => {
  const disCarbon = carbon.toFixed(1);
  const disCalori = calori.toFixed(0);
  return (
    <Card
      style={{
        width: '18rem',
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
              <p className="text-calori">
                {disCalori}{' '}
                <span
                  style={{
                    fontSize: '12px',
                  }}>
                  Kkal
                </span>{' '}
              </p>
              <p className="text-carbon">
                {disCarbon}{' '}
                <span
                  style={{
                    fontSize: '12px',
                  }}>
                  Kg/C02
                </span>{' '}
              </p>
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
