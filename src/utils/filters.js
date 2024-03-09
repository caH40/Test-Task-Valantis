/**
 * Удаляет дубликаты из массива объектов или примитивов на основе указанного свойства или без него.
 * @param {Array<Object|any>} results - Массив объектов или примитивов, из которого нужно удалить дубликаты.
 * @param {string} [property] - Название свойства объектов массива, по которому будут удалены дубликаты. Необязательный параметр.
 * @returns {Array<Object|any>} Массив объектов или примитивов без дубликатов, основанный на указанном свойстве или сам массив, если свойство не указано.
 */
export const removeDuplicates = (results, property) => {
  const uniqueIds = new Map();

  for (const result of results) {
    // если свойства не существует (не передано), значит элементы массива примитивы
    const target = property ? result[property] : result;

    // добавление элементов в коллекцию Map
    uniqueIds.set(target, result);
  }

  return [...uniqueIds.values()];
};

/**
 * Формирование необходимого количества id продуктов в массиве
 */
export const sliceIds = (ids, offset, limit, brand, price, productName) => {
  // если есть фильтрация, то необходимо выделять необходимые товары в соответствии с пагинацией.
  if (brand || price || productName) {
    return ids.slice(offset, limit + offset);
  }

  // для других запросов пагинация осуществляется на сервере
  return ids;
};
