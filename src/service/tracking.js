import axios from 'axios';
import api from './api';

export async function getFavoriteFoods() {
  const response = await api.get(`/tracking/today`).catch((err) => {
    return err.response;
  });

  return response;
}
export async function setNewFoodTracking(data, token) {
  const response = await axios
    .post('https://foodise-back-end.deta.dev/tracking', data, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .catch((err) => err.response);

  return response;
}
