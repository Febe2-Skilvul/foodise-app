import { Col, Row } from 'react-bootstrap';
import ServicePortal from '../../components/Portal';

import ListFavoriteFood from '../../components/ListFavoriteFood';
import { TextOne } from '../../components/atoms/Fonts';

const Favorites = () => {
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal />
        <TextOne colored={'Favorites'}>Your</TextOne>
        <ListFavoriteFood />
      </Col>
    </Row>
  );
};

export default Favorites;
