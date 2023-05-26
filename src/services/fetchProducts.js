import { marketApi } from './axiosConfig';

export const getMarketProducts = async market => {
  try {
    const { data } = await marketApi.get(`/products/${market}`);

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await marketApi.get(`/products`);

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
