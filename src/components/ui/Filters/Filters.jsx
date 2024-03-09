import { useState } from 'react';

import styles from './Filters.module.css';

function Filters({ setFilter, setPage }) {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [product, setProductName] = useState(null);

  const handleInput = (event, name) => {
    let valueBrand = null;
    let valuePrice = null;
    let valueProductName = null;

    switch (name) {
      case 'brand':
        valueBrand = event.target.value !== '' ? event.target.value : null;
        valuePrice = null;
        valueProductName = null;
        break;
      case 'price':
        valueBrand = null;
        valuePrice = +event.target.value !== 0 ? +event.target.value : null;
        valueProductName = null;
        break;
      case 'product':
        valueBrand = null;
        valuePrice = null;
        valueProductName = event.target.value !== '' ? event.target.value : null;
        break;
    }

    setBrand(valueBrand);
    setPrice(valuePrice);
    setProductName(valueProductName);

    // установка первой страницы для пагинации
    setPage(1);
  };
  return (
    <div className={styles.filters}>
      <input
        className={styles.input}
        onChange={(event) => handleInput(event, 'brand')}
        type={'text'}
        value={brand || ''}
        placeholder="brand"
      />

      <input
        className={styles.input}
        onChange={(event) => handleInput(event, 'price')}
        type={'number'}
        value={price || ''}
        placeholder="price"
      />

      <input
        className={styles.input}
        onChange={(event) => handleInput(event, 'product')}
        type={'text'}
        value={product || ''}
        placeholder="product"
      />

      <button
        className={styles.button}
        onClick={() => {
          setFilter({ brand, price, product });
          setProductName(null);
          setBrand(null);
          setPrice(null);
        }}
      >
        Применить
      </button>
    </div>
  );
}

export default Filters;
