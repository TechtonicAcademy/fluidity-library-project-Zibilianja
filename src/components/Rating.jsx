import React from 'react';
import { useState, useRef } from 'react';
import '../styles/rating.scss';
import { FaStar } from 'react-icons/fa';


const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


  return (
    <div className="form__rating">
      {[...Array(5)].map((star, i) => {
        let ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              className="rating__radio"
              value={ratingValue}
              display="hidden"
              onClick={() => setRating(ratingValue)}
              
            />
            <FaStar
              className="fa fa-star star__rating"
              color={ratingValue <= (hover || rating) ? "gold" : "grey"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;

