import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import HomePhoto from "../../product.jpg";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
  const [review, setReview] = useReviews();
  return (
    <div>
      <div className="home">
        <div className="home-desc">
          <h1 className="fw-bold">Car Mania</h1>
          <h2 className="fw-bold">Revealed the truth infront of your eye</h2>
          <p>
            Car Mania is a car reviewing and analyzing website which you can
            trust with blind eye. We also reveal the market analyses like
            manufacturing costs and market price. Here you can visualize all
            important data in DASHBOARD section with lovely interactive charts
            and graphs. So, let's start a journey to the world of madness...
          </p>
          <Button variant="primary">EXPLORE</Button>{" "}
        </div>
        <div className="img">
          <img src={HomePhoto} alt="" />
        </div>
      </div>
      <div className="mb-5">
        <h2>Customer Review (3/{review.length})</h2>
        <div className="row row-cols-3 g-5 m-5 px-5">
          {review.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <Button variant="primary">
          <Link className="text-white text-decoration-none" to="/reviews">
            SEE ALL REVIEWS
          </Link>
        </Button>{" "}
      </div>
    </div>
  );
};

export default Home;
