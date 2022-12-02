import React from 'react';
import { Stack } from 'react-bootstrap';
import CardioTask from './atoms/CardioTask';
import CircleProgress from './atoms/CircleProgress';
import TrackNull from './atoms/TrackNull';

const TrackCardio = () => {
  return (
    // <Stack className="track-food-container">
    //   <p
    //     style={{
    //       textAlign: 'center',
    //       fontSize: '20px',
    //       fontWeight: '600',
    //       color: '#000',
    //       minWidth: '300px',
    //     }}>
    //     Olahraga Untuk Menjaga{' '}
    //     <span
    //       style={{
    //         color: '#227880',
    //       }}>
    //       Kebugaran
    //     </span>
    //   </p>
    //   <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-4">
    //     <CircleProgress
    //       color={'#227880'}
    //       name="Task"
    //       value={1}
    //       percent={39}
    //     />
    //     <div className="d-flex flex-column gap-4">
    //       <CardioTask index={1} task={'Push-Up 50x'} isDone={false} />
    //       <CardioTask index={2} task={'Sit-Up 50x'} isDone={false} />
    //       <CardioTask index={3} task={'Lari 100m'} isDone={false} />
    //       <CardioTask index={4} task={'Jalan 250m'} isDone={false} />
    //     </div>
    //   </div>
    // </Stack>
    <>
      <TrackNull message={'Fitur Belum Tersedia'} />
    </>
  );
};

export default TrackCardio;
