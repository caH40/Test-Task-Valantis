import cn from 'classnames';

import styles from './Pagination.module.css';

/**
 * Компонент пагинации для страницы в начале списка.
 * @param {Object} props - Свойства компонента.
 * @param {number[]} props.pages - Массив страниц для отображения.
 * @param {function} props.getClick - Функция обработки клика по странице.
 * @param {number} props.page - Текущая страница.
 * @returns {JSX.Element} Элемент компонента пагинации для первых страниц.
 */
function PaginationFirstPages({ pages, getClick, page }) {
  const lastPage = pages.length;

  return (
    <>
      {pages.slice(0, 5).map((pageCurrent) => (
        <li
          className={cn(styles.item, { [styles.active]: page === pageCurrent })}
          onClick={() => getClick(pageCurrent)}
          key={pageCurrent}
        >
          {pageCurrent}
        </li>
      ))}
      <li className={styles.item}>...</li>
      <li className={styles.item} onClick={() => getClick(lastPage)}>
        {lastPage}
      </li>
    </>
  );
}

export default PaginationFirstPages;
