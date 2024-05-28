import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, outOf }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = outOf - fullStars - halfStars;

  return (
    <div className="flex items-center gap-1 mt-2">
      {Array(fullStars).fill(<FaStar className="text-[#ffd700] text-xl" />)}
      {Array(halfStars).fill(
        <FaStarHalfAlt className="text-[#ffd700] text-xl" />
      )}
      {Array(emptyStars).fill(<FaRegStar className="text-[#ffd700] text-xl" />)}
    </div>
  );
};

export default StarRating;
