import { useEffect, useState } from 'react';
import { getProducts } from '../api/rest/root';
import { removeDuplicates, sliceIds } from '../utils/filters';
import { getParamsRequest } from '../utils/request';

/**
 * Хук получения данных с API
 * @param {string} page - Текущая страница.
 * @param {string} limit - Количество элементов на странице.
 * @returns {Object} Объект, содержащий список товаров, количество страниц и статус загрузки.
 * @property {Object[]} products - Массив товаров.
 * @property {number} quantityPages - Общее количество страниц.
 * @property {boolean} pending - Статус загрузки.
 */
export const useGetProducts = (
  setQuantityPages,
  page = 0,
  limit = 50,
  brand,
  price,
  product
) => {
  const [products, setProducts] = useState({});
  const [pending, setPending] = useState(false);
  const [repeatRequest, setRepeatRequest] = useState(false);

  const offset = (page - 1) * limit;

  // запрос получения товаров
  useEffect(() => {
    async function fetchData() {
      try {
        // включение статуса загрузки
        setPending(true);

        // создание параметров для запроса
        const paramsRequest = getParamsRequest(offset, limit, brand, price, product);

        // получение упорядоченного списка идентификаторов товаров
        const idsFormApi = await getProducts(paramsRequest);

        // изменение общего количества страниц пагинации при включенных фильтрах
        if (brand || price || product) {
          setQuantityPages(Math.ceil(idsFormApi.result.length / limit));
        }

        // формирование необходимого количества id продуктов
        const ids = sliceIds(idsFormApi.result, offset, limit, brand, price, product);

        // получение списка товаров
        const productsFormApi = await getProducts({
          action: 'get_items',
          params: { ids },
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

        // повторный запрос при получении ошибки
        setRepeatRequest((prev) => !prev);
      }
    }
    fetchData();
  }, [setQuantityPages, offset, page, limit, repeatRequest, brand, price, product]);

  return { products, pending };
};
