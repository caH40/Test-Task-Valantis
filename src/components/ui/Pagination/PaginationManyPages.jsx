import PaginationFirstPages from './PaginationFirstPages';
import PaginationLastPages from './PaginationLastPages';
import PaginationMiddlePages from './PaginationMiddlePages';

/**
 * Компонент пагинации для большого количества страниц.
 * @param {Object} props - Свойства компонента.
 * @param {number[]} props.pages - Массив страниц для отображения.
 * @param {function} props.getClick - Функция обработки клика по странице.
 * @param {number} props.page - Текущая страница.
 * @returns {JSX.Element} Элемент компонента пагинации для большого количества страниц.
 */
function PaginationManyPages({ pages, getClick, page }) {
  const lastPage = pages.length;
  const isMiddlePage = 5 < page && page < lastPage - 4;
  const isLastPage = page > lastPage - 5;

  return (
    <>
      {page <= 5 && <PaginationFirstPages pages={pages} getClick={getClick} page={page} />}
      {isLastPage && page > 5 && (
        <PaginationLastPages pages={pages} getClick={getClick} page={page} />
      )}
      {isMiddlePage && <PaginationMiddlePages pages={pages} getClick={getClick} page={page} />}
    </>
  );
}

export default PaginationManyPages;
