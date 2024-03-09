/**
 * Формирование параметров запроса в зависимости от наличия фильтров.
 * @param {number} offset - Смещение для выборки данных.
 * @param {number} limit - Лимит выборки данных.
 * @param {Object} filter - Объект с фильтрами.
 * @returns {Object} Параметры запроса.
 */
export const getParamsRequest = (offset, limit, filter) => {
  for (const value of Object.entries(filter)) {
    if (value[1]) {
      return {
        action: 'filter',
        params: Object.fromEntries([value]),
      };
    }
  }

  return {
    action: 'get_ids',
    params: { offset, limit },
  };
};
