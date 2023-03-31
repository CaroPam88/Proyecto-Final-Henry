    import { useState } from 'react';

    export function StarRating() {
        
    const [rating, setRating] = useState(0);

    function handleStarClick(ratingValue) {
        setRating(ratingValue);
        
       //a donde la guardo??
      
    }

    return (
        <div className="rating">
        {[1, 2, 3, 4, 5].map((ratingValue) => (
            <span
            key={ratingValue}
            className={`fa fa-star${ratingValue <= rating ? ' fa-solid selected' : ' fa-regular'}`}
            onClick={() => handleStarClick(ratingValue)}
            />
        ))}
        </div>
    );
    }

  