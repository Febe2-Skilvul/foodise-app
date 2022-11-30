import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginCtx } from '../../app/context/LoginContext';

const SignupSuccess = ({ success }) => {
  const [open, setOpen] = useState(true);
  const { setShow } = useContext(loginCtx);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };
  const handleGoLogin = () => {
    setOpen(false);
    setShow(true);
    navigate('/');
  };
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex w-100 align-items-center justify-content-center flex-column gap-3">
        <h3
          style={{
            color: '#000',
          }}>
          Daftar{' '}
          <span
            style={{
              color: '#3bacb6',
            }}>
            Sukses
          </span>
        </h3>
        <img
          src="/images/thum-success.png"
          className="img-fluid"
          alt=""
          width={250}
        />

        <Button
          type="button"
          onClick={() => handleGoLogin()}
          className="button-main">
          Go Login
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default SignupSuccess;
