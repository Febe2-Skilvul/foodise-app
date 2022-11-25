import React from 'react';
import { Stack } from 'react-bootstrap';
import CircleProgress from './atoms/CircleProgress';

const TrackCarbon = () => {
  return (
    <Stack
      className=" p-3 w-100 bg-body rounded d-flex flex-row flex-wrap justify-content-center align-items-center gap-3"
      style={{
        border: '2px #f0f0f0 solid',
      }}>
      <CircleProgress
        color={'#455A64'}
        name="Carbon"
        value={100}
        percent={69}
        unit="kgc02"
      />
      <div className="carbon-msg">
        <p
          style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '500',
          }}>
          Anda Telah Menghasilkan Karbon{' '}
          <span
            style={{
              fontWeight: '600',
              color: '#FF5652',
            }}>
            450 kgc02
          </span>{' '}
          hari ini
        </p>
        <p
          style={{
            fontSize: '14px',
            fontWeight: '400',
          }}>
          {' '}
          Ayo kurangi Makanan yang mengandung Karbon untuk bumi yang
          lebih baik
        </p>
      </div>
    </Stack>
  );
};

export default TrackCarbon;
