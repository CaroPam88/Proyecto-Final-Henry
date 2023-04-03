import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const StarsRating = () => {
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await axios.get('http://localhost:3001/rating');
        const { average } = response.data;
        setAverageRating(average);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAverageRating();
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(averageRating)) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} opacity="0.5" />);
      }
    }
    return stars;
  };

  return (
    <div>
      {averageRating ? (
        <div>
          <p>Our Customer´s Satisfaction: {averageRating}</p>
          {renderStars()}
        </div>
      ) : (
        <p>No hay valoración todavía</p>
      )}
    </div>
  );
};

export default StarsRating;

