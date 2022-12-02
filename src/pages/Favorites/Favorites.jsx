import { Col, Row } from 'react-bootstrap';
import ServicePortal from '../../components/Portal';

import ListFavoriteFood from './ListFavoriteFood';

const Favorites = () => {
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal />
        <ListFavoriteFood />
      </Col>
    </Row>
  );
};

export default Favorites;
