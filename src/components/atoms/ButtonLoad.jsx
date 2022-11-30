import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const ButtonLoad = () => {
  return (
    <Button variant="secondary" disabled className="w-100">
      <Spinner size="sm" animation="border" />
    </Button>
  );
};

export default ButtonLoad;
