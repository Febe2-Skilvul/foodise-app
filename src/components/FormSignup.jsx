import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { postSignupUser } from '../service/auth';
import ButtonLoad from './atoms/ButtonLoad';
import { TextOne } from './atoms/Fonts';
import Loading from './atoms/Loading';
import SignupSuccess from './atoms/SignupSuccess';

const FormSignup = () => {
  const [dataSignup, setDataSignup] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
    if (name === 'gender') {
      return setDataSignup((prev) => ({ ...prev, gender: value }));
    }
    if (name === 'berat') {
      return setDataSignup((prev) => ({ ...prev, berat: value }));
    }
    if (name === 'tinggi') {
      return setDataSignup((prev) => ({ ...prev, tinggi: value }));
    }
    if (name === 'umur') {
      return setDataSignup((prev) => ({ ...prev, umur: value }));
    }
    if (name === 'aktivitas') {
      return setDataSignup((prev) => ({
        ...prev,
        levelAktivitas: value,
      }));
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await postSignupUser(dataSignup).finally(() =>
      setLoading(false)
    );
    if (result.status > 300) {
      return setError(true);
    }
    return setSuccess(true);
  };
  return (
    <>
      {error ? (
        <Alert
          variant="danger"
          onClose={() => setError(false)}
          dismissible>
          Email sudah digunakan
        </Alert>
      ) : null}
      {success ? <SignupSuccess /> : null}
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
          <Form.Select
            aria-label="Gender"
            name="gender"
            onChange={(e) => getDataSignup(e)}>
            <option>Gender</option>
            <option value="laki-laki">Pria</option>
            <option value="perempuan">Wanita</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="berat"
            onChange={(e) => getDataSignup(e)}
            placeholder="Berat Badan"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="tinggi"
            onChange={(e) => getDataSignup(e)}
            placeholder="Tinggi Badan"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="umur"
            onChange={(e) => getDataSignup(e)}
            placeholder="Umur"
          />
        </Form.Group>
        <Form.Select
          aria-label="Aktivitas Olahraga"
          name="aktivitas"
          onChange={(e) => getDataSignup(e)}>
          <option>Olahraga dalam seminggu</option>
          <option value={1.2}>tidak olahraga</option>
          <option value={1.37}>1-3 kali</option>
          <option value={1.55}> 3-5 kali</option>
          <option value={1.725}> 5-6 kali </option>
          <option value={1.9}> 2 kali dalam sehari</option>
        </Form.Select>
        {loading ? (
          <ButtonLoad />
        ) : (
          <Button
            type="submit"
            className="w-100 mt-3 button button-main">
            Daftar
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormSignup;
