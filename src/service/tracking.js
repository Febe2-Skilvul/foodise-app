import api from './api';

export async function getFavoriteFoods() {
  const response = await api.get(`/tracking/today`).catch((err) => {
    return err.response;
  });

  return response;
}
export async function setNewFoodTracking(data) {
  const response = await api.post('/tracking', data).catch((err) => {
    return err.response;
  });

  return response;
}
