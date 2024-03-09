import styles from './Input.module.css';

const initFilters = { brand: null, price: null, product: null };

/**
 * Компонент для ввода данных.
 * @param {Object} props - Свойства компонента.
 * @param {string} props.value - Значение ввода.
 * @param {string} props.property - Название поля ввода.
 * @param {string} props.type - Тип поля ввода.
 * @param {function} props.handleInput - Функция обработки изменения значения ввода.
 * @returns {JSX.Element} Элемент компонента для ввода данных.
 */
function Input({ value, property, type, handleInput }) {
  return (
    <input
      className={styles.input}
      onChange={(event) => {
        const valueCurrent = type === 'number' ? +event.target.value : event.target.value;
        handleInput({ ...initFilters, [property]: valueCurrent });
      }}
      type={type}
      value={value || ''}
      placeholder={property}
    />
  );
}

export default Input;
