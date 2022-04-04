import React from "react";
import { Button } from "react-bootstrap";
import HomePhoto from "../../product.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-desc">
          <h1>Product Analysis</h1>
          <h2>Lorem ipsum dolor sit amet</h2>
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
      <div>
          <h2>Customer Review (3/6)</h2>
          {
              
          }
      </div>
    </div>
  );
};

export default Home;
