import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import './detail.css';

import { Alert, Button, Col, Row, Stack } from 'react-bootstrap';
import ListFoods from '../../components/ListFoods';
import Nutrition from '../../components/Nutrition';
import fakeDetail from '../../config/detail';

import { porsiCtx } from '../../app/context/PorsiContext';
import ServicePortal from '../../components/Portal';
import { TextOne } from '../../components/atoms/Fonts';
import RecommendedFood from '../../components/RecommendedFood';
import { useParams } from 'react-router-dom';
import { getDetailFood } from '../../service/food';
import Loading from '../../components/atoms/Loading';
import HeroDetail from './HeroDetail';
import NutsDetail from './NutsDetail';
import MainDetail from './MainDetail';

const Detail = () => {
  const [open, setOpen] = useState(false);
  const { porsi, handlePlus, handleMinus } = useContext(porsiCtx);
  const [food, setFood] = useState([]);
  const [calori, setCalori] = useState(100);
  const [carbon, setCarbon] = useState(67);
  const [isLoading, setIsLoading] = useState(true);
  const initial = {
    carbon: 56,
    calori: 44,
  };
  const param = useParams();
  const handleCount = () => {
    setCalori(() => initial.calori * porsi);
    setCarbon(() => initial.carbon * porsi);
  };
  const getDetailFoodAPI = useCallback(async () => {
    setIsLoading(true);
    await getDetailFood(param.id)
      .then((res) => {
        console.log(res.data);
        setFood(res);
      })
      .finally(() => setIsLoading(false));
  }, [getDetailFood]);

  const handlePostFood = () => {};
  useEffect(() => {
    handleCount();
    getDetailFoodAPI();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <ServicePortal />
      {!isLoading ? (
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
        <div>food kosong</div>
      )}
      <p>detail</p>
    </>
  );
};

export default Detail;
