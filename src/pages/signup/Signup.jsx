import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import SignupSuccess from '../../components/atoms/SignupSuccess';
import FormSignup from '../../components/FormSignup';

const Signup = () => {
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
      </Col>
    </Row>
  );
};

export default Signup;
