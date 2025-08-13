import React, { useState } from "react";

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0); // stores selected rating
  const [hover, setHover] = useState(0);   // stores hovered star

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              color: starValue <= (hover || rating) ? "#ffd700" : "#ccc",
              transition: "color 0.2s"
            }}
          >
            ★
          </span>
        );
      })}
      <p style={{ marginTop: "5px" }}>Rating: {rating} / {totalStars}</p>
    </div>
  );
}

export default StarRating;
