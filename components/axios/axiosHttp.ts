import axios from 'axios';

import { ErrorAlert } from './alert';

const customAxios = axios.create({
  baseURL: 'https://dev.dipmarts.com',
  headers: {
    Authorization: 'Token 11ead2082295795:3ad6227be431637',
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
