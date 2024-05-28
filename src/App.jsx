// src/App.jsx
import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import reviewsData from "./data/reviews_data.json";
import "./index.css";

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setReviews(reviewsData);
  }, []);

  return (
    <>
      <h1 className="text-center m-3 text-2xl font-bold">
        Review Sentiment Analysis
      </h1>
      <ReviewList reviews={reviews} />
    </>
  );
};

export default App;
