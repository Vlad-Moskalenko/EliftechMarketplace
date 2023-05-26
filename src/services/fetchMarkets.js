import { marketApi } from './axiosConfig';

export const getMarkets = async () => {
  try {
    const { data } = await marketApi.get(`/products/markets`);

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
