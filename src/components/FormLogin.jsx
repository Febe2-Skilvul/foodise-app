import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../app/context/LoginContext';
import API from '../service/api';
import {
  login,
  postUserRegister,
  setLoginUser,
} from '../service/auth';
import ButtonLoad from './atoms/ButtonLoad';

const FormLogin = () => {
  const [dataLogin, setDataLogin] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setIsLogin, setUser, setShow } = useContext(loginCtx);

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
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await setLoginUser(dataLogin).finally(() =>
      setLoading(false)
    );
    console.log(result);
    if (result.status < 300) {
      setIsLogin(true);
      setUser(result.data);
      postUserRegister(result.data);
      setShow(false);
      return navigate('/home');
    }
    return setOpen(true);
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
      {loading ? (
        <ButtonLoad />
      ) : (
        <Button type="submit" className="w-100 button button-main">
          Login
        </Button>
      )}
    </Form>
  );
};

export default FormLogin;
