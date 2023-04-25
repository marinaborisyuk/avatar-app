import styles from './RefreshAllBtn.module.css';

const RefreshAllBtn = ({refreshAll}) => {
  return (
    <button className={styles.refresh} onClick={refreshAll}>
      Refresh All
    </button>
  );
};

export default RefreshAllBtn;
