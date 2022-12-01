import { Col, Row } from 'react-bootstrap';
import CategoryBar from '../../components/CategoryBar';
import ListFoods from '../../components/ListFoods';
import ServicePortal from '../../components/Portal';

const Home = () => {
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal />
        <CategoryBar />
        <ListFoods />
      </Col>
    </Row>
  );
};

export default Home;
