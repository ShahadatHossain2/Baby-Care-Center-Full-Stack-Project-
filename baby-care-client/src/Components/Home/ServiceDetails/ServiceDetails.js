import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ServiceDetails = ({service}) => {
    return (
        <div className="mt-5 col-md-4 service-container rounded shadow">
            <div className="p-3" style={{height:'85%'}}>
            <img className="image-style" src={service.image} alt=""/>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 15px'}}>
            <b style={{color:'deeppink'}}>${service.price}</b>
            <Link className="btn btn-primary" to={"/booking/"+service._id}><FontAwesomeIcon icon={faShoppingCart}/> Book Now</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;