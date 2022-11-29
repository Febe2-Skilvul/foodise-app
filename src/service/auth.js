import axios from 'axios';

const ROOT_API = process.env.REACT_APP_BASE;
export async function postSignupUser(data) {
  const response = await axios
    .post(`https://o76ho3.deta.dev/auth/signup`, data)
    .catch((err) => {
      return err.response;
    });

  return response;
}
