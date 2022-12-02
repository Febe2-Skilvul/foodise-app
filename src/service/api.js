import axios from 'axios';

let res = JSON.parse(localStorage.getItem('jwttoken'));

console.log('token', res);

export default axios.create({
  baseURL: `https://foodise-back-end.deta.dev/`,
  headers: {
    Authorization: `bearer ${res === null ? ' ' : res}`,
  },
});

