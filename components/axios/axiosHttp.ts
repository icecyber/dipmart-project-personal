import axios from 'axios';
import { ErrorAlert } from './alert';

const customAxios = axios.create({
  baseURL: 'https://dev.dipmarts.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Token bdb003759e01619:0e4847e18fa63e8',
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
