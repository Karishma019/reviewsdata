// src/ReviewList.jsx
import React from "react";
import ReviewHighlighter from "./ReviewHighlighter";
import StarRating from "./StarRating";
import { IoMdPersonAdd } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const ReviewList = ({ reviews }) => {
  return (
    <div className="container">
      {reviews.map((review, index) => (
        <div key={index} className="mt-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img
                src={review.source.icon}
                alt={review.source.name}
                className="h-10"
              />
              <h2 className="font-bold">
                {review.reviewer_name}{" "}
                <span className="font-normal">wrote at </span>
                {review.source.name}
              </h2>
            </div>
            <div className="flex text-xl gap-2">
              <IoMdPersonAdd />
              <MdBookmarkBorder />
              <BsThreeDots />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>
              <StarRating
                rating={review.rating_review_score / 2}
                outOf={review.out_of}
              />
            </p>
            <p>{review.date}</p>
          </div>
          <ReviewHighlighter review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
