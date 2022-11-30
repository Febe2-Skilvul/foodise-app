import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Accordion, Button, Modal, Stack } from 'react-bootstrap';
import CircleProgress from './atoms/CircleProgress';
import { TextOne } from './atoms/Fonts';
import Icon from './atoms/Icon';
import { loginCtx } from '../app/context/LoginContext';
import { useDispatch, useSelector } from 'react-redux';
import { trackingDay } from '../app/redux/user/TrackingSlice';
import { trackDate } from '../app/redux/user/TrackDateSlice';
import Loading from './atoms/Loading';
import TrackNull from './atoms/TrackNull';

const TrackPortal = () => {
  const { user } = useContext(loginCtx);
  const res = useSelector((state) => state.trackDate);
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [dataToday, setDataToday] = useState({
    food: '',
    calori: '',
    carbon: '',
  });
  const dispatch = useDispatch();
  let dateFormat = {
    hari: startDate.getDate(),
    bulan: startDate.getMonth() + 1,
    tahun: startDate.getFullYear(),
  };
  // const todayFood = {
  //   food:
  //     res.track?.data || !res === ''
  //       ? 0
  //       : res.track.data.tracking.food.length,
  //   calori:
  //     res.track?.data === '' || !res
  //       ? 0
  //       : res.track.data.tracking.food.totCal,
  //   carbon:
  //     res.track?.data === '' || !res
  //       ? 0
  //       : res.track.data.tracking.food.totCarbon,
  // };
  console.log(startDate);
  useEffect(() => {
    dispatch(trackDate(startDate));
  }, [startDate]);
  console.log('data track =>', res);
  console.log('data track =>', res.track?.data === '');
  return (
    <>
      {res.loading && <Loading />}
      {res.error && <TrackNull />}
      {res.track && !res.loading && !res.error ? (
        <Stack
          className=" p-3 w-100 bg-body rounded d-flex flex-column justify-content-center align-items-center gap-5 "
          style={{
            marginTop: '100px',
            padding: '0',
          }}>
          <Stack className="d-flex flex-column flex-md-row flex-wrap justify-content-between">
            <TextOne colored={'Tracking'}>Your</TextOne>
            <div className="d-flex w-100 w-md-25 justify-content-between flex-row align-items-center gap-3">
              <p
                style={{
                  margin: '0',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#9e9e9e',
                }}>
                {`${dateFormat.hari}/${dateFormat.bulan}/${dateFormat.tahun}`}
              </p>
              <Button
                className="button-pill bg-white shadow-sm"
                onClick={() => setShow(true)}>
                <Icon image={'/icons/calendar-days-solid.svg'} />
              </Button>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                  <TextOne colored={'Tanggal'}>Pilih </TextOne>
                </Modal.Header>
                <Modal.Body className="d-flex align-items-center justify-content-center">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-100 border border-3"
                  />
                </Modal.Body>
              </Modal>
            </div>
          </Stack>
          {/* <Stack className="d-md-flex shadow rounded flex-row  justify-content-center w-100 box-circle-progress d-none ">
        <CircleProgress
          color={'#227880'}
          name="Foods"
          value={todayFood.food}
          percent={(todayFood.food / 4) * 100}
        />
        <CircleProgress
          color={'#455A64'}
          name="Carbon"
          value={todayFood.carbon}
          percent={(todayFood.carbon / user.carboNeeded) * 100}
          unit="kgc02"
        />
        <CircleProgress
          color={'#FF5652'}
          name="Calori"
          value={todayFood.calori}
          percent={(todayFood.calori / user.carboNeeded) * 100}
          unit="Kkal"
        />
      </Stack> */}
          <Stack className="d-flex d-md-none shadow rounded flex-row  justify-content-center">
            <CircleProgress
              color={'#455A64'}
              name="Carbon"
              value={100}
              percent={69}
              unit="kgc02"
            />
            <CircleProgress
              color={'#FF5652'}
              name="Calori"
              value={1090}
              percent={79}
              unit="Kkal"
            />
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default TrackPortal;
