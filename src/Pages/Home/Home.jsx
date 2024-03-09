import { useState } from 'react';

import { useGetProducts } from '../../hooks/useGetProducts';
import Pagination from '../../components/ui/Pagination/Pagination';

import styles from './Home.module.css';
import Table from '../../components/Table/Table';

// const initFilters = { brand: null, price: null, productName: null };
const limit = 20;

function Home() {
  // const [filter, setFilter] = useState(initFilters);
  const [page, setPage] = useState(1);
  const { products, quantityPages, pending } = useGetProducts(page, limit);

  return (
    <main className={styles.wrapper}>
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
