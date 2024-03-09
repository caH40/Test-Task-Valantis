import axios from 'axios';

/**
 * Функция для создания асинхронного запроса с использованием .
 * @param {Object} options - Опции запроса.
 * @param {string} options.url - URL, по которому будет выполнен запрос. По умолчанию '/'.
 * @param {'GET' | 'POST' | 'PUT' | ' DELETE'} options.method - HTTP метод запроса. По умолчанию 'GET'.
 * @param {Object} options.headers - Заголовки запроса. По умолчанию {}.
 * @param {Object} options.data - Данные, которые будут отправлены в теле запроса. По умолчанию {}.
 * @param {Object} options.params - Параметры запроса. По умолчанию {}.
 * @returns {Promise} - ответ сервера.
 */
const createRequest = async ({
  url = '/',
  method = 'GET',
  headers = {},
  data = {},
  params = {},
}) => {
  const response = await axios({ url, method, headers, data, params });
  return response.data;
};

export default createRequest;
