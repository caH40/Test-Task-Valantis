/**
 * Получение таймштамп текущей даты UTC с точностью до дня
 * в формате год, месяц, день без разделителей
 */
export const getUTCDateOnly = () => {
  // Получаем текущую дату UTC
  const currentDate = new Date();

  // Получаем год, месяц и день
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');

  return `${year}${month}${day}`;
};
