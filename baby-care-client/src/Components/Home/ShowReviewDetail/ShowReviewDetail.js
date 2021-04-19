import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ShowReviewDetail = ({review}) => {
    return (
        <div className="col-md-4 mt-5 mb-3">
            <div className="shadow rounded  p-2  bg-white">
                <div style={{display:'flex', justifyContent:'center', paddingTop:'15px', height:'80px'}}>
                    <img style={{width:'50px', borderRadius: '25px'}} src={review.photo} alt=""/>
                    <div>
                    <h4>{review.name}</h4>
                    <b>{review.company}</b>
                    </div>
                </div>
                <div style={{height:'120px'}}>
                    <p className="pt-3">{review.description}</p>
                    <p style={{color:'goldenrod'}}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>
                </div>
            </div>
        </div>
    );
};

export default ShowReviewDetail;