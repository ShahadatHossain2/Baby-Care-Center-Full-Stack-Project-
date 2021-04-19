import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import UserSideNevBar from '../UserSideNevbar/UserSideNevBar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [review, setReview] = useState([]);
    const handleBlur = e => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleReview = () => {
        const reviewDetails = {...loggedInUser,...review}
        fetch('https://safe-earth-98425.herokuapp.com/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewDetails)
      })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <UserSideNevBar></UserSideNevBar>
            </div>
            <div className="col-md-6 mt-5">
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:'20px'}}>
                    <h4><strong>Review</strong></h4>
                    <b>{loggedInUser.name}</b>
                </div>
            {/* <form onSubmit={handleReview}>
                    <div class="mb-3">
                        <input type="text" onBlur={handleBlur} class="form-control" name="name" placeholder="Your name" />
                    </div>
                    <div class="mb-3">
                        <input type="text" onBlur={handleBlur} name="company" class="form-control" placeholder="company name & designation" />
                    </div>
                    <div class="mb-3">
                        <input  type="text" onBlur={handleBlur} class="form-control" name="description" placeholder="Description" />
                    </div>
                    <input className="btn btn-secondary" type="submit" value="Submit"/>
                </form> */}
                <div>
                <input type="text" onBlur={handleBlur} class="w-75" name="name" placeholder="Your name" /> <br/><br/>
                <input type="text" onBlur={handleBlur} name="company" class="w-75" placeholder="company name & designation" /> <br/><br/>
                <input  type="text" onBlur={handleBlur} class="w-75" name="description" placeholder="Description" /> <br/><br/>
                <button onClick={handleReview} className="btn btn-danger">Submit</button>
                </div>
        </div>
        </div>
    );
};

export default Review;