import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faComment } from '@fortawesome/free-solid-svg-icons';
import icon from '../../../Images/icon.jpg'

const UserSideNevBar = () => {
    return (
        <div className="pl-5 sidenev-container pt-5">
            <img style={{width:'50px', borderRadius:'25px'}} src={icon} alt=""/> <b className="text-white">Baby Care</b> <br/> <br/>
            <Link to="/booking"><FontAwesomeIcon icon={faShoppingCart}/> <b style={{color:"white"}}>Book</b></Link> <br/> <br/>
            <Link to="/orders"><FontAwesomeIcon icon={faList}/> <b style={{color:"white"}}>Booking List</b></Link> <br/> <br/>
            <Link to="/review"><FontAwesomeIcon icon={faComment}/> <b style={{color:"white"}}>Review</b></Link>
        </div>
    );
};

export default UserSideNevBar;