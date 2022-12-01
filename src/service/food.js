import axios from 'axios';

const ROOT_API = 'https://o76ho3.deta.dev/auth';

export async function setFavoriteFoods(token, body) {
  const response = await axios
    .post(`https://foodise-back-end.deta.dev/favorites`, body, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .catch((err) => err.response);

  return response;
}
export async function removeFavoriteFoods(token, id) {
  const response = await axios
    .delete(`https://foodise-back-end.deta.dev/favorites/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .catch((err) => err.response);

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
