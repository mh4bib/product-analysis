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
          <h1 className="fw-bold">Product Analysis</h1>
          <h2 className="fw-bold">Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            impedit temporibus illum dignissimos iste numquam architecto quis
            deserunt cupiditate nulla! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia ratione recusandae, aliquam voluptates
            enim maiores asperiores, itaque unde laborum accusantium dolore
            facere laudantium et provident nihil voluptatum, reprehenderit
            vitae!
          </p>
          <Button variant="primary">EXPLORE</Button>{" "}
        </div>
        <div className="img">
          <img src={HomePhoto} alt="" />
        </div>
      </div>
      <div className="mb-5">
          <h2>Customer Review (3/{review.length})</h2>
          <div className='row row-cols-3 g-5 m-5 px-5'>
             {
              review.slice(0,3).map(review => <Review
              key={review.id}
              review={review}
              ></Review>)
          } 
          </div>
          <Button variant="primary"><Link className="text-white text-decoration-none" to="/reviews">SEE ALL REVIEWS</Link></Button>{" "}
      </div>
    </div>
  );
};

export default Home;
