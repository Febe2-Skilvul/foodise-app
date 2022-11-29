import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { loginCtx } from '../app/context/LoginContext';
import FormLogin from '../components/FormLogin';

const Login = () => {
  const { show, setShow } = useContext(loginCtx);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{
        maxWidth: '400px',
      }}>
      <Modal.Header closeButton>
        <Modal.Title>
          Sign{' '}
          <span
            style={{
              color: '#3bacb6',
            }}>
            in
          </span>{' '}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormLogin />
      </Modal.Body>
    </Modal>
  );
};

export default Login;
