import axios from 'axios';
import api from './api';

const ROOT_API = 'https://o76ho3.deta.dev/auth';

export async function getFavoriteFoods() {
  const response = await api.get(`/favorites`).catch((err) => {
    return err.response;
  });

  return response;
}
export async function getDetailFood(id) {
  const response = await api
    .get(`/foods/${id}`)
    .catch((err) => err.response);

  return response;
}
