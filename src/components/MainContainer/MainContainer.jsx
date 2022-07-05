import { useState, useEffect } from 'react';
import axios from 'axios';
import CustomCard from 'components/Card/CustomCard';
import { Container } from 'react-bootstrap';
import styles from './MainContainer.module.css';
const MainContainer = () => {
  const [data, setData] = useState([]);
  const prefixId = 'property';
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://mocki.io/v1/e4d92915-fbe3-4588-8ea7-7b88794d2632`,
      );
      setData(response.data.data);
      console.log('res ', response.data.data);
    } catch (err) {
      setData([]);
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let content = data.map((e, i) => (
    <CustomCard
      img={e.img}
      like={e.like}
      price={e.price}
      br={e.br}
      bath={e.bath}
      sqft={e.sqft}
      address={e.address}
      date={e.date}
      key={prefixId + '-' + i}
    />
  ));
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.main_container}>{content}</div>
    </div>
  );
};
export default MainContainer;
