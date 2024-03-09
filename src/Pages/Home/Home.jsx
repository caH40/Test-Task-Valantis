import { useState } from 'react';

import { useGetProducts } from '../../hooks/useGetProducts';
import Pagination from '../../components/ui/Pagination/Pagination';

import styles from './Home.module.css';
import Table from '../../components/Table/Table';
import Filters from '../../components/ui/Filters/Filters';

const initFilters = { brand: null, price: null, productName: null };
const limit = 50;

function Home() {
  const [filter, setFilter] = useState(initFilters);

  const [page, setPage] = useState(1);
  const { products, quantityPages, pending } = useGetProducts(
    page,
    limit,
    filter.brand,
    filter.price,
    filter.productName
  );

  return (
    <main className={styles.wrapper}>
      <Filters filter={filter} setFilter={setFilter} />
      <section className={styles.wrapper__table}>
        <Table products={products} pending={pending} />
      </section>

      {quantityPages !== 0 && (
        <Pagination quantityPages={quantityPages} page={page} setPage={setPage} />
      )}
    </main>
  );
}
export default Home;
