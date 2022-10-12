import axios from 'axios';
import { ErrorAlert } from './alert';

const customAxios = axios.create({
  baseURL: 'https://dev.dipmarts.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Token e032812775e2eef:14a8126c0ef667b',
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
