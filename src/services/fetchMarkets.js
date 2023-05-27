import { marketApi } from './axiosConfig';

export const getMarkets = async () => {
  const { data } = await marketApi.get(`/products/markets`);

  return data;
};
