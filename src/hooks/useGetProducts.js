import { useEffect, useState } from 'react';
import { getProducts } from '../api/rest/root';
import { removeDuplicates } from '../utils/filters';

/**
 * Хук получения данных с API
 * @param {string} page - Текущая страница.
 * @param {string} limit - Количество элементов на странице.
 * @returns {Object} Объект, содержащий список товаров, количество страниц и статус загрузки.
 * @property {Object[]} products - Массив товаров.
 * @property {number} quantityPages - Общее количество страниц.
 * @property {boolean} pending - Статус загрузки.
 */
export const useGetProducts = (page = 0, limit = 50) => {
  const [products, setProducts] = useState({});
  const [quantityPages, setQuantityPages] = useState(0);
  const [pending, setPending] = useState(false);
  const [repeatRequest, setRepeatRequest] = useState(false);

  const offset = (page - 1) * limit;

  // запрос общего количества товаров для пагинации
  useEffect(() => {
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
  }, [limit]);

  // запрос получения товаров
  useEffect(() => {
    async function fetchData() {
      try {
        // включение статуса загрузки
        setPending(true);

        // получение упорядоченного списка идентификаторов товаров
        const idsFormApi = await getProducts({
          action: 'get_ids',
          params: { offset, limit },
        });

        // получение списка товаров
        const productsFormApi = await getProducts({
          action: 'get_items',
          params: { ids: idsFormApi.result },
        });

        // получение товаров с уникальными id
        const productsUnique = removeDuplicates(productsFormApi.result, 'id');

        // добавление порядкового номера товара
        const productsWithNumbers = productsUnique.map((product, index) => ({
          ...product,
          index: index + 1 + (page - 1) * limit,
        }));

        setProducts(productsWithNumbers);

        // выключение статус загрузки
        setPending(false);
      } catch (error) {
        console.error(error.message); // eslint-disable-line
        setRepeatRequest((prev) => !prev);
      }
    }
    fetchData();
  }, [offset, page, limit, repeatRequest]);

  return { products, quantityPages, pending };
};
