import axios from 'axios';
import api from './api';

const ROOT_API = 'https://o76ho3.deta.dev/auth';

export async function getFavoriteFoods(token) {
  const response = await axios
    .get(`https://foodise-back-end.deta.dev/favorites`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response;
}
export async function getDetailFood(id, token) {
  const response = await axios
    .get(`https://foodise-back-end.deta.dev/foods/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .catch((err) => err.response);

  return response;
}
export async function getRecipeFood(id, token) {
  const response = await axios
    .get(`https://foodise-back-end.deta.dev/recipes/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .catch((err) => err.response);

  return response;
}
