import md5 from 'md5';

import { apiPassword } from '../../config/environment';
import { getUTCDateOnly } from '../../utils/date';

/**
 * Генерирует заголовок аутентификации на основе текущей даты и пароля API.
 * @returns {{'X-Auth':string}} Заголовок X-Auth.
 */
export const getAuthHeader = () => {
  // получение таймштамп текущей даты UTC
  const date = getUTCDateOnly();

  // вычисление хэш с использованием MD5
  const hash = md5(`${apiPassword}_${date}`);

  return { 'X-Auth': hash };
};
