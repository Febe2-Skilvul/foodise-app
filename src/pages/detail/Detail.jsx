import React, { useContext, useEffect, useState } from 'react';

import './detail.css';

import { Alert, Button, Col, Row, Stack } from 'react-bootstrap';
import ListFoods from '../../components/ListFoods';
import Nutrition from '../../components/Nutrition';
import fakeDetail from '../../config/detail';

import { porsiCtx } from '../../app/context/PorsiContext';
import ServicePortal from '../../components/Portal';
import { TextOne } from '../../components/atoms/Fonts';
import RecommendedFood from '../../components/RecommendedFood';

const Detail = () => {
  const [open, setOpen] = useState(false);
  const { porsi, handlePlus, handleMinus } = useContext(porsiCtx);
  const [calori, setCalori] = useState(100);
  const [carbon, setCarbon] = useState(67);
  const initial = {
    carbon: 56,
    calori: 44,
  };
  const handleCount = () => {
    setCalori(() => initial.calori * porsi);
    setCarbon(() => initial.carbon * porsi);
  };
  useEffect(() => {
    handleCount();
  }, [porsi]);

  return (
    <>
      <ServicePortal />
      {fakeDetail ? (
        <Row
          style={{
            marginTop: '100px',
          }}>
          <Col>
            <Stack className="d-flex p-5 align-items-center  flex-row flex-wrap gap-5">
              <div>
                <img
                  src={fakeDetail.image}
                  alt="food"
                  className="img-fluid rounded bg-none"
                />
              </div>
              <div
                className="d-flex flex-column"
                style={{
                  maxWidth: '500px',
                }}>
                <p
                  style={{
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '30px',
                    color: '#000',
                  }}>
                  {fakeDetail.title}
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: fakeDetail.summary,
                  }}></div>
              </div>
            </Stack>

            <Stack className="d-flex flex-row flex-wrap align-items-center p-md-5 gap-5">
              {fakeDetail.nutrition ? (
                <Stack className="mt-5 gap-4">
                  {fakeDetail.nutrition.nutrients.map((nuts, i) => {
                    if (nuts.name === 'Calories') {
                      return (
                        <Nutrition
                          key={i}
                          icon={'/icons/fire-cal.svg'}
                          name={'Calories'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                    if (nuts.name === 'Fat') {
                      return (
                        <Nutrition
                          key={i}
                          icon={'/icons/cloud-meatball.svg'}
                          name={'Fat'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                    if (nuts.name === 'Carbohydrates') {
                      return (
                        <Nutrition
                          key={i}
                          icon={'/icons/wheat-awn.svg'}
                          name={'Carbohydrates'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                    if (nuts.name === 'Protein') {
                      return (
                        <Nutrition
                          key={i}
                          icon={'/icons/dna.svg'}
                          name={'Protein'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                  })}
                </Stack>
              ) : (
                <></>
              )}

              <Stack className="d-flex justify-content-center align-items-center">
                {open && (
                  <Alert
                    variant="danger"
                    onClose={() => setOpen(false)}
                    dismissible>
                    Your food has been added
                  </Alert>
                )}

                <div className="carbon-card d-flex justify-content-between">
                  <div>
                    <div className="d-flex flex-row flex-wrap tabel-data">
                      <div
                        className="col-6 p-3"
                        style={{
                          borderRight: '1px solid #bfbfbf',
                        }}>
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            margin: '0',
                          }}>
                          Calori
                        </p>
                        <p>{calori} KgCO2</p>
                      </div>
                      <div className="col-6 p-3">
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            margin: '0',
                          }}>
                          Carbon
                        </p>{' '}
                        {carbon} Kkal
                      </div>
                      <div
                        className="p-3 col-12 d-flex flex-column"
                        style={{
                          borderTop: 'solid 1px #bfbfbf',
                        }}>
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            margin: '0',
                          }}>
                          Porsi
                        </p>
                        <div className=" w-100 d-flex flex-row align-items-center justify-content-between">
                          <Button
                            variant="light"
                            className="btn-count shadow-sm"
                            onClick={() => handleMinus()}>
                            -
                          </Button>
                          <p
                            style={{
                              margin: '0',
                            }}>
                            {porsi}
                          </p>
                          <Button
                            variant="light"
                            className="btn-count shadow-sm"
                            onClick={() => handlePlus()}>
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="button button-main w-100"
                    type="button">
                    Save
                  </Button>
                </div>
              </Stack>
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
    </>
  );
};

export default Detail;
