import { marketApi } from './axiosConfig';

export const addOrderDelivery = async deliveryData => {
  const { data } = await marketApi.post('/orders', deliveryData);

  return data;
};
