import { Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CircleProgress from './atoms/CircleProgress';

const TrackCarbon = () => {
  const food = useSelector((state) => state.trackDate.track.data);

  return (
    <Stack
      className=" p-3 w-100 bg-body rounded d-flex flex-row flex-wrap justify-content-center align-items-center gap-3"
      style={{
        border: '2px #f0f0f0 solid',
      }}>
      <CircleProgress
        color={'#455A64'}
        name="Carbon"
        value={food.totCarbon}
        percent={(food.totCarbon / 2) * 100}
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
            {food.totCarbon} kgc02
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
