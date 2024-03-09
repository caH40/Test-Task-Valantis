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
