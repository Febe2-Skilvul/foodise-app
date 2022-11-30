import { Col, Row, Stack } from 'react-bootstrap';
import CardFood from '../../components/CardFood';
import ServicePortal from '../../components/Portal';
import { fakeData } from '../../config/foods';

const Favorites = () => {
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal />
        <Stack
          className="p-3  flex-row flex-wrap justify-content-center gap-5"
          style={{
            marginTop: '50px',
          }}>
          {fakeData !== null ? (
            fakeData.map((food, i) => {
              return (
                <CardFood
                  key={i}
                  name={food.title}
                  id={food.id}
                  img={food.image}
                  calori={230}
                  carbon={20}
                  favorite={true}
                />
              );
            })
          ) : (
            <div>Data tidak ditemukan</div>
          )}
        </Stack>
      </Col>
    </Row>
  );
};

export default Favorites;
