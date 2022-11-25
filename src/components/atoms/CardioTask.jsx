import React from 'react';
import { Button } from 'react-bootstrap';

const CardioTask = ({ index, task, isDone }) => {
  return (
    <div className="d-flex flex-row align-items-center gap-3 justify-content-between w-100 shadow-sm p-2">
      {index}.
      <p
        style={{
          margin: '0',
          textAlign: 'start',
        }}>
        {task}
      </p>
      <Button className="button button-main">Selesai</Button>
    </div>
  );
};

export default CardioTask;
