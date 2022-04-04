import React from "react";
import { Card } from "react-bootstrap";

const Review = (props) => {
  const { name, picture, rating, review } = props.review;
  console.log(props);
  return (
    <div className="col">
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="text-primary">{name}</Card.Title>
          <Card.Text>{review}</Card.Text>
        </Card.Body>
        <Card.Footer className="">
          <small className="text-muted">{name} rated the item <strong className="text-primary">{rating}/5</strong></small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Review;
