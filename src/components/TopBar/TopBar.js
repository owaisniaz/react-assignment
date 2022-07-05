import styles from './TopBar.module.css';
const TopBar = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbar_container}>
        <div href="#home" className={styles.brand_name}>
          Property Listings
        </div>
      </div>
    </header>
  );
};

export default TopBar;
