import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <div className="d-flex align-items-center w-100 justify-content-center mt-3">
          <p
            style={{
              color: '#9e9e9e',
            }}>
            belum punya akun?{' '}
            <Link
              to={'/signup'}
              className="text-decoration-none"
              onClick={() => setShow(false)}>
              <span
                style={{
                  fontWeight: '600',
                }}>
                Daftar
              </span>
            </Link>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
