import axios from 'axios';

import { ErrorAlert } from './alert';

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BaseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: process.env.NEXT_PUBLIC_Token,
  },
});
customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status) {
      ErrorAlert(error.message, true);
    }
  }
);

export default customAxios;
