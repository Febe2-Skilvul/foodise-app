import React from 'react';
import { Accordion, Button, Stack } from 'react-bootstrap';
import CircleProgress from './atoms/CircleProgress';
import { TextOne } from './atoms/Fonts';
import Icon from './atoms/Icon';

const TrackPortal = () => {
  return (
    <Stack
      className=" p-3 w-100 bg-body rounded d-flex flex-column justify-content-center align-items-center gap-5 "
      style={{
        marginTop: '100px',
        padding: '0',
      }}>
      <Stack className="d-flex flex-row justify-content-between">
        <TextOne colored={'Tracking'}>Your</TextOne>
        <Button className="button-pill bg-white shadow-sm">
          <Icon image={'/icons/calendar-days-solid.svg'} />
        </Button>
      </Stack>
      <Stack className="d-md-flex shadow rounded flex-row  justify-content-center w-100 box-circle-progress d-none ">
        <CircleProgress
          color={'#227880'}
          name="Foods"
          value={1}
          percent={39}
        />
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
      <Stack className="d-flex d-md-none shadow rounded flex-row   justify-content-center">
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
  );
};

export default TrackPortal;
