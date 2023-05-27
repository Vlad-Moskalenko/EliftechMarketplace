import { marketApi } from './axiosConfig';

export const addOrderDelivery = async deliveryData => {
  try {
    const { data } = await marketApi.post('/orders', deliveryData);

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
