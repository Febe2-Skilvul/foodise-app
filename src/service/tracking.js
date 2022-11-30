import api from './api';

export async function getFavoriteFoods() {
  const response = await api.get(`/tracking/today`).catch((err) => {
    return err.response;
  });

  return response;
}
