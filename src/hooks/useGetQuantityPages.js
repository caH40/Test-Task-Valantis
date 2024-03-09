import { useEffect, useState } from 'react';

import { getProducts } from '../api/rest/root';
import { removeDuplicates } from '../utils/filters';

export const useGetQuantityPages = (limit, filter) => {
  const [quantityPages, setQuantityPages] = useState(0);

  // запрос общего количества товаров для пагинации
  useEffect(() => {
    if (filter.brand || filter.price || filter.product) {
      return;
    }

    async function fetchData() {
      // получение упорядоченного списка идентификаторов товаров
      const idsFormApi = await getProducts({
        action: 'get_ids',
      });

      // получение уникальных id товаров
      const idsUnique = removeDuplicates(idsFormApi.result);

      setQuantityPages(Math.ceil(idsUnique.length / limit));
    }
    fetchData();
  }, [limit, filter]);

  return { quantityPages };
};
