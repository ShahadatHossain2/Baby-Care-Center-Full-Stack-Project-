import React, { useEffect, useState } from 'react';
import ShowReviewDetail from '../ShowReviewDetail/ShowReviewDetail';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://safe-earth-98425.herokuapp.com/reviewList')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div style={{backgroundColor:'pink'}} className="container text-center mt-5 pt-5">
            <h1 style={{fontFamily:'fantasy', color:'white'}}>All Review's</h1>
            <div className="row">
                {
                    reviews.map(review => <ShowReviewDetail key={review._id} review={review}></ShowReviewDetail>)
                }
            </div>
        </div>
    );
};

export default ShowReviews;