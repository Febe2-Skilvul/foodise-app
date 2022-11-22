import React, { useContext, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const [dataLogin, setDataLogin] = useState();
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const getInputLogin = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'password') {
      return setDataLogin((prev) => ({ ...prev, password: value }));
    }
    if (name === 'email') {
      return setDataLogin((prev) => ({ ...prev, email: value }));
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('login');
  };
  return (
    <Form onSubmit={(e) => handleLogin(e)}>
      {open ? (
        <Alert
          variant="danger"
          onClose={() => setOpen(false)}
          dismissible>
          Kata sandi atau Password anda salah
        </Alert>
      ) : null}

      <Form.Group className="mb-3">
        <Form.Label className="label-text">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={(e) => getInputLogin(e)}
          placeholder="masukan email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => getInputLogin(e)}
          placeholder="kata sandi"
        />
      </Form.Group>
      <Button
        type="submit"
        size="lg"
        className="w-100 button button-main">
        Login
      </Button>
    </Form>
  );
};

export default FormLogin;
