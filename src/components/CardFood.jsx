import { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { filterCtx } from '../app/context/FilterContext';
import { loginCtx } from '../app/context/LoginContext';
import {
  removeFavoriteFoods,
  setFavoriteFoods,
} from '../service/food';
import Icon from './atoms/Icon';

const CardFood = ({
  name,
  img,
  id,
  calori,
  carbon,
  favorite,
  id_fav,
}) => {
  const { user } = useContext(loginCtx);
  const { setFavUpdate } = useContext(filterCtx);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [idFavorite, setIdFavorite] = useState(id_fav);
  const disCarbon = carbon.toFixed(1);
  const disCalori = calori.toFixed(0);
  const handleSetFavorite = async () => {
    const body = {
      user: user._id,
      food: id,
    };
    const res = await setFavoriteFoods(user.token, body);

    if (res.status < 300) {
      setIdFavorite(res.data.favorite);
      setFavUpdate((prev) => !prev);
      setIsFavorite(true);
    }
  };
  const handleRemoveFavorite = async () => {
    const res = await removeFavoriteFoods(user.token, idFavorite);

    if (res.status < 300) {
      setIsFavorite(false);
      setFavUpdate((prev) => !prev);
    }
  };
  return (
    <Card
      style={{
        width: '18rem',
        border: 'none',
      }}>
      <Link to={`/home/${id}`} className="text-decoration-none">
        <Card.Img
          className="rounded"
          variant="top"
          src={img}
          width={400}
          height={200}
        />
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

            {isFavorite ? (
              <Link to={'#'}>
                <Button
                  variant="light"
                  onClick={() => handleRemoveFavorite()}
                  style={{
                    margin: '0',
                  }}>
                  <Icon image={'/icons/heart-red.svg'} />
                </Button>
              </Link>
            ) : (
              <Link to={'#'}>
                <Button
                  onClick={() => handleSetFavorite()}
                  variant="light"
                  style={{
                    margin: '0',
                  }}>
                  <Icon image={'/icons/heart-regular.svg'} />
                </Button>
              </Link>
            )}
          </div>
          <Card.Title className="text-card mt-3">{name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardFood;
