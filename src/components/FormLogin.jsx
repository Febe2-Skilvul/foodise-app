import React, { useContext, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../app/context/LoginContext';
import API from '../service/api';

const FormLogin = () => {
  const [dataLogin, setDataLogin] = useState();
  const [open, setOpen] = useState(false);
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
  const handleLogin = (e) => {
    e.preventDefault();
    API.post(`/login`,{email:dataLogin.email, password: dataLogin.password})
    .then((res) => {
      if(res.status === 200) {
        setIsLogin(true)
        setUser(localStorage.setItem('ActiveUser', JSON.stringify(res?.data?.token)))
        setShow(false)
        // if(res.data.status === "admin"){
        //   navigate('/adminhome')

        // } else {
        //   navigate('/home')
        // }
          navigate('/home')
      } else{
        console.log("error");
        setIsLogin(false)
        setUser('')
      }
    })
    .catch((error) => {
      console.log("ERROR Post", error);
      setOpen(true)
    })
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
