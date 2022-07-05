import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emptyHeart from '../../assets/heart-stroke.svg';
import filledHeart from '../../assets/heart-fill.svg';
import styles from './CustomCard.module.css';
const CustomCard = (props) => {
  return (
    <>
      <Card className={styles.card_item}>
        <div className={styles.img_box}>
          <Card.Img variant="top" className={styles.cardImg} src={props.img} />
          <img
            src={props.like ? filledHeart : emptyHeart}
            className={styles.img_heart}
            alt="Empty Heart"
          />
        </div>

        <div>
          <ul className={`${styles.details_bar} mt-3 mb-0`}>
            <li className="pe-2">{props.br}</li>
            <li>
              <span className={`${styles.side_border} px-2`}>{props.bath}</span>
            </li>
            <li className="px-2">{props.sqft}</li>
          </ul>
          <p className={`${styles.price} mt-3 mb-0`}>{props.price}</p>
          <p className={`${styles.card_details} mb-0 mt-3`}>{props.address}</p>
          <small className={`${styles.card_date} mt-2 mb-0`}>
            Listed: {props.date}
          </small>
        </div>
      </Card>
    </>
  );
};

export default CustomCard;
