/**
 * Создание параметров запроса в зависимости от входных данных
 */
export const getParamsRequest = (offset, limit, brand, price, productName) => {
  if (productName) {
    return {
      action: 'filter',
      params: { product: productName },
    };
  }
  if (brand) {
    return {
      action: 'filter',
      params: { brand },
    };
  }
  if (price) {
    return {
      action: 'filter',
      params: { price },
    };
  }

  return {
    action: 'get_ids',
    params: { offset, limit },
  };
};
