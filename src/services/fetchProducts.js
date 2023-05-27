import { marketApi } from './axiosConfig';

export const getMarketProducts = async market => {
  const { data } = await marketApi.get(`/products/${market}`);

  return data;
};

export const getAllProducts = async () => {
  const { data } = await marketApi.get(`/products`);

  return data;
};
