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
    <Form onSubmit={(e) => handleRegister(e)}>
      <TextOne colored={'Now'}>Join</TextOne>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="username"
          onChange={(e) => getDataSignup(e)}
          placeholder="Masukan Nama"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          name="email"
          onChange={(e) => getDataSignup(e)}
          placeholder="Masukan Email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => getDataSignup(e)}
          placeholder="Kata Sandi"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Gender">
          <option>Gender</option>
          <option value="male">Pria</option>
          <option value="female">Wanita</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          name="weight"
          onChange={(e) => getDataSignup(e)}
          placeholder="Berat Badan"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          name="height"
          onChange={(e) => getDataSignup(e)}
          placeholder="Tinggi Badan"
        />
      </Form.Group>
      <Form.Select aria-label="Aktivitas Olahraga">
        <option>Olahraga dalam seminggu</option>
        <option value={1.2}>tidak olahraga</option>
        <option value={1.37}>1-3 kali</option>
        <option value={1.55}> 3-5 kali</option>
        <option value={1.725}> 5-6 kali </option>
        <option value={1.9}> 2 kali dalam sehari</option>
      </Form.Select>
      <Button
        type="submit"
        size="lg"
        className="w-100 mt-3 button button-main">
        Daftar
      </Button>
    </Form>
  );
};

export default FormSignup;
