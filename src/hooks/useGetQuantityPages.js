import { useEffect } from 'react';

import { getProducts } from '../api/rest/root';
import { removeDuplicates } from '../utils/filters';

/**
 * Получение общего количества товаров для пагинации без применяемых фильтров.
 * @param {function} setQuantityPages - Функция для установки общего количества страниц.
 * @param {number} limit - Лимит товаров на странице.
 * @param {Object} filter - Фильтры для запроса товаров.
 */
export const useGetQuantityPages = (setQuantityPages, limit, filter) => {
  // запрос общего количества товаров для пагинации
  useEffect(() => {
    if (filter.brand || filter.price || filter.product) {
      return;
    }

    async function fetchData() {
      try {
        // получение упорядоченного списка идентификаторов товаров
        const idsFormApi = await getProducts({
          action: 'get_ids',
        });

        // получение уникальных id товаров
        const idsUnique = removeDuplicates(idsFormApi.result);

        setQuantityPages(Math.ceil(idsUnique.length / limit));
      } catch (error) {
        console.error(error.message); // eslint-disable-line
      }
    }
    fetchData();
  }, [limit, filter, setQuantityPages]);
};
