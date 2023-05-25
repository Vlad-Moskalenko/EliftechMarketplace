import axios from 'axios';

export const marketApi = axios.create({
  baseURL: 'https://eliftechdelivery.onrender.com/api/',
});
