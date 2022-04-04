import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Card } from "react-bootstrap";

const Review = (props) => {
  const { name, picture, rating, review } = props.review;
  return (
    <div className="col px-5">
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="text-primary">{name}</Card.Title>
          <Card.Text>{review}</Card.Text>
        </Card.Body>
        <Card.Footer className="">
          <small className="text-muted">{name} rated the item <strong className="text-primary">{rating}/5 <FontAwesomeIcon icon={faStar} /></strong></small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Review;
