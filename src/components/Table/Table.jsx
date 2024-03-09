import cn from 'classnames/bind';

import styles from './Table.module.css';

const cx = cn.bind(styles);

function Table({ products, pending }) {
  return (
    <table className={cx('table', { blur: pending })}>
      <thead>
        <tr>
          <th className={styles.td__nowrap}>п/п</th>
          <th className={styles.tdBrand}>Брэнд</th>
          <th>Название продукта</th>
          <th>Цена, руб</th>
        </tr>
      </thead>
      <tbody>
        {!!products?.length &&
          products.map((result) => (
            <tr key={result.id}>
              <td>{result.index}</td>
              <td>{result.brand}</td>
              <td>{result.product}</td>
              <td>{result.price}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
