/**
 * Получает текущую дату в формате UTC без времени.
 * @returns {string} Текущая дата в формате "YYYYMMDD".
 */
export const getUTCDateOnly = () => {
  // текущую дату UTC
  const currentDate = new Date();

  // год, месяц и день
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');

  return `${year}${month}${day}`;
};
