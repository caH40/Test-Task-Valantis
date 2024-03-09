import cn from 'classnames';

import styles from './Pagination.module.css';

/**
 * Компонент строки пагинации для страницы по середине списка.
 * @param {Object} props - Свойства компонента.
 * @param {number[]} props.pages - Массив страниц для отображения.
 * @param {function} props.getClick - Функция обработки клика по странице.
 * @param {number} props.page - Текущая страница.
 * @returns {JSX.Element} Элемент компонента пагинации для средних страниц.
 */
function PaginationMiddlePages({ pages, getClick, page }) {
  const lastPage = pages.length;

  return (
    <>
      <li className={styles.item} onClick={() => getClick(1)}>
        1
      </li>
      <li className={styles.item}>...</li>
      {pages.slice(page - 2, page + 1).map((pageCurrent) => (
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

export default PaginationMiddlePages;
