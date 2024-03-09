import cn from 'classnames';

import styles from './Pagination.module.css';

/**
 * Компонент пагинации для страницы в конце списка.
 * @param {Object} props - Свойства компонента.
 * @param {number[]} props.pages - Массив страниц для отображения.
 * @param {function} props.getClick - Функция обработки клика по странице.
 * @param {number} props.page - Текущая страница.
 * @returns {JSX.Element} Элемент компонента пагинации для последних страниц.
 */
function PaginationLastPages({ pages, getClick, page }) {
  const lastPage = pages.length;

  return (
    <>
      <li className={styles.item} onClick={() => getClick(1)}>
        1
      </li>
      <li className={styles.item}>...</li>
      {pages.slice(lastPage - 5).map((pageCurrent) => (
        <li
          className={cn(styles.item, { [styles.active]: page === pageCurrent })}
          onClick={() => getClick(pageCurrent)}
          key={pageCurrent}
        >
          {pageCurrent}
        </li>
      ))}
    </>
  );
}

export default PaginationLastPages;
