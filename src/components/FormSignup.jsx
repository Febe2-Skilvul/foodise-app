import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { TextOne } from './atoms/Fonts';

const FormSignup = () => {
  const [dataSignup, setDataSignup] = useState({});

  const getDataSignup = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'username') {
      return setDataSignup((prev) => ({ ...prev, username: value }));
    }
    if (name === 'password') {
      return setDataSignup((prev) => ({ ...prev, password: value }));
    }
    if (name === 'email') {
      return setDataSignup((prev) => ({ ...prev, email: value }));
    }
  };
  const handleRegister = (e) => {
    console.log(dataSignup);
  };
  return (
    <Form
      style={{
        marginTop: '100px',
      }}
      onSubmit={(e) => handleRegister(e)}>
      <TextOne colored={'Now'}>Join</TextOne>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="username"
          onChange={(e) => getDataSignup(e)}
          placeholder="Enter Username"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          name="email"
          onChange={(e) => getDataSignup(e)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => getDataSignup(e)}
          placeholder="Password"
        />
      </Form.Group>
      <Button
        type="submit"
        size="lg"
        className="w-100 button button-main">
        Daftar
      </Button>
    </Form>
  );
};

export default FormSignup;
