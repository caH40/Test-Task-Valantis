import { apiServer } from '../../config/environment';
import { getAuthHeader } from '../headers/auth';
import createRequest from '../request';

/**
 * POST запрос по адресу "/"
 */
export const getProducts = async (data) => {
  // url запроса
  const url = apiServer;

  // заголовки запроса
  const xAuthHeader = getAuthHeader();

  // метод запроса
  const method = 'POST';

  // запрос на API
  return await createRequest({ url, data, headers: xAuthHeader, method });
};
