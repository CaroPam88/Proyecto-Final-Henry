import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import style from "../Satisfaction/Satisfaction.module.css"

const StarsRating = () => {
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await axios.get('http://localhost:3001/rating');
        const { data } = response;
        console.log('response', data);
        setAverageRating(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAverageRating();
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {

      if (i < Math.floor(averageRating)) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className={style.star} />);
      } else if (i === Math.floor(averageRating) && averageRating % 1 >= 0.5) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt}  className={style.star} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar}  className={style.star} opacity="0.5" />);
      }
    }
    return stars;
  };

  return (
    <div className={style.cont}>
      {averageRating ? (
        <div>
          <p className={style.text}>Our Customer's Satisfaction: </p>
          {renderStars()}
        </div>
      ) : (
        <p className={style.text}>Loading...</p>
      )}
    </div>
  );
};

export default StarsRating;
