import axios from 'axios';

const res = JSON.parse(localStorage.getItem('user-active'));

console.log(res);
export default axios.create({
  baseURL: `https://foodise-back-end.deta.dev/`,
  headers: {
    Authorization: `bearer ${res.token}`,
  },
});
