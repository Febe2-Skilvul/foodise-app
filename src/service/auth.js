import axios from 'axios';

const ROOT_API = 'https://o76ho3.deta.dev/auth';
export async function postSignupUser(data) {
  const response = await axios
    .post(`${ROOT_API}/signup`, data)
    .catch((err) => {
      return err.response;
    });

  return response;
}
export async function setLoginUser(data) {
  const response = await axios
    .post(`${ROOT_API}/signin`, data)
    .catch((err) => {
      return err.response;
    });

  return response;
}
export function postUserRegister(data) {
  localStorage.setItem('user-active', JSON.stringify(data));
}
