import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Modal, Stack } from 'react-bootstrap';
import { TextOne } from './atoms/Fonts';
import Icon from './atoms/Icon';
import { loginCtx } from '../app/context/LoginContext';
import { useDispatch, useSelector } from 'react-redux';
import { trackDate } from '../app/redux/user/TrackDateSlice';
import Loading from './atoms/Loading';
import BoxPortalProgress from './atoms/BoxPortalProgress';

const TrackPortal = () => {
  const { user } = useContext(loginCtx);
  const res = useSelector((state) => state.trackDate);
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  let dateFormat = {
    hari: startDate.getDate(),
    bulan: startDate.getMonth() + 1,
    tahun: startDate.getFullYear(),
  };
  const dayFix = (day) => {
    if (day < 10) {
      return `0${day}`;
    }
    return day;
  };
  let dateFix = `${dateFormat.tahun}-${dateFormat.bulan}-${dayFix(
    dateFormat.hari
  )}`;

  useEffect(() => {
    dispatch(trackDate({ date: dateFix, token: user.token }));
  }, [startDate]);

  return (
    <>
      {res.loading && <Loading />}
      {res.error && null}

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
        {res.track.data && !res.loading && !res.error ? (
          <BoxPortalProgress
            caloriNeed={user?.caloriNeeded}
            carbonNeed={user?.carboNeeded}
            carbonToday={res.track.data.totCarbon}
            caloriToday={res.track.data.totCal}
            foodToday={
              !res.track.data.tracking
                ? 0
                : res.track.data.tracking.food.length
            }
          />
        ) : (
          <BoxPortalProgress />
        )}
      </Stack>
    </>
  );
};

export default TrackPortal;
