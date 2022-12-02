import React, { useContext } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginCtx } from '../../app/context/LoginContext';
import FormSignup from '../../components/FormSignup';

const Signup = () => {
  const { setShow } = useContext(loginCtx);
  return (
    <Row
      className="justify-content-md-center "
      style={{
        marginTop: '100px',
      }}>
      <Col
        xs={12}
        md={5}
        style={{
          marginTop: '100px',
        }}>
        <Stack gap={5}>
          <div>
            <img
              src="/images/thum1.png"
              width={350}
              height={350}
              alt=""
            />
          </div>
        </Stack>
      </Col>
      <Col xs={12} md={5}>
        <FormSignup />
        <div className="d-flex align-items-center w-100 justify-content-center mt-3">
          <p
            style={{
              color: '#9e9e9e',
            }}>
            sudah punya akun?{' '}
            <Link
              to={'#'}
              className="text-decoration-none"
              onClick={() => setShow(true)}>
              <span
                style={{
                  fontWeight: '600',
                }}>
                Login
              </span>
            </Link>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Signup;
