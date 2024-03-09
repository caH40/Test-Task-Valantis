import { useState } from 'react';

import styles from './Filters.module.css';
import Input from '../Input/Input';

const initFilters = { brand: null, price: null, product: null };

/**
 * Компонент для фильтрации товаров.
 * Запрос на получение фильтрованных товаров происходит после нажатия кнопки.
 * @param {Object} props - Свойства компонента.
 * @param {function} props.setFilter - Функция для установки фильтров.
 * @param {function} props.setPage - Функция для установки текущей страницы пагинации.
 * @returns {JSX.Element} Элемент компонента для фильтрации данных.
 */
function Filters({ setFilter, setPage }) {
  const [filterLocal, setFilterLocal] = useState(initFilters);

  return (
    <div className={styles.filters}>
      <Input
        value={filterLocal.brand}
        property={'brand'}
        type={'text'}
        handleInput={setFilterLocal}
      />
      <Input
        value={filterLocal.price}
        property={'price'}
        type={'number'}
        handleInput={setFilterLocal}
      />
      <Input
        value={filterLocal.product}
        property={'product'}
        type={'text'}
        handleInput={setFilterLocal}
      />

      <button
        className={styles.button}
        onClick={() => {
          setFilter(filterLocal);
          setFilterLocal(initFilters);

          // установка первой страницы для пагинации
          setPage(1);
        }}
      >
        Применить
      </button>
    </div>
  );
}

export default Filters;
