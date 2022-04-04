import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [review, setReview] = useReviews();
    return (
        <div className='row row-cols-3 g-5 m-5 px-5'>
            {
                review.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;