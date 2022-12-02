import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import './detail.css';

import { Col, Row, Stack } from 'react-bootstrap';
import ServicePortal from '../../components/Portal';
import { TextOne } from '../../components/atoms/Fonts';
import RecommendedFood from '../../components/RecommendedFood';
import { useParams } from 'react-router-dom';
import { getDetailFood } from '../../service/food';
import Loading from '../../components/atoms/Loading';
import HeroDetail from './HeroDetail';
import NutsDetail from './NutsDetail';
import MainDetail from './MainDetail';
import Notfound from '../../components/atoms/NotFound';
import { loginCtx } from '../../app/context/LoginContext';

const Detail = () => {
  const [food, setFood] = useState([]);
  const { user } = useContext(loginCtx);
  const [isLoading, setIsLoading] = useState(true);

  const param = useParams();

  const getDetailFoodAPI = useCallback(async () => {
    setIsLoading(true);
    await getDetailFood(param.id, user.token)
      .then((res) => {
        setFood(res);
      })
      .finally(() => setIsLoading(false));
  }, [getDetailFood]);

  useEffect(() => {
    getDetailFoodAPI();
  }, []);

  return (
    <>
      <ServicePortal />
      {isLoading && <Loading />}
      {!isLoading && food ? (
        <Row
          style={{
            marginTop: '100px',
          }}>
          <Col>
            <HeroDetail
              image={food?.data?.image}
              name={food.data.name}
              desc={food.data.desc}
            />

            <Stack className="d-flex flex-row flex-wrap align-items-center p-md-5 gap-5">
              <NutsDetail
                cal={food.data.cal}
                fat={food.data.fat}
                carb={food.data.carb}
                protein={food.data.protein}
              />

              <MainDetail food={food.data} />
            </Stack>
          </Col>
          <div className="mt-5 p-md-5 d-flex align-items-center flex-column section-landingpage gap-5">
            <TextOne colored={'Foods'}>Our</TextOne>
            <RecommendedFood />
          </div>
        </Row>
      ) : (
        !isLoading && <Notfound />
      )}
    </>
  );
};

export default Detail;
