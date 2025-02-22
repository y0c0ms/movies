import React from "react";
import { FaStar } from "react-icons/fa";
import "../css/StarRating.css";

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="star-rating">
      {Array(10)
        .fill(0)
        .map((_, idx) => {
          const starValue = idx + 1;
          return (
            <label key={starValue}>
              <input
                type="radio"
                name="rating"
                style={{ display: "none" }}
                value={starValue}
                onClick={() => setRating(starValue)}
              />
              <FaStar
                size={20}
                color={starValue <= rating ? "#01af93" : "#bbb"}
                style={{ cursor: "pointer" }}
              />
            </label>
          );
        })}
    </div>
  );
};

export default StarRating;
