import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import './SideNavbar.css';
import icon from '../../../Images/icon.jpg'

const SideNavbar = () => {
    return (
        <div className="pl-5 sidenev-container pt-5">
            <img style={{width:'50px', borderRadius:'25px'}} src={icon} alt=""/> <b className="text-white">Baby Care</b> <br/> <br/>
            <Link to="/orderList"><FontAwesomeIcon icon={faList}/> <b style={{color:"white"}}>Order List</b></Link> <br/> <br/>
            <Link to="/admin"><FontAwesomeIcon icon={faPlus}/> <b style={{color:"white"}}>Add Service</b></Link> <br/> <br/>
            <Link to="/addAdmin"><FontAwesomeIcon icon={faUser}/> <b style={{color:"white"}}>Make Admin</b></Link> <br/> <br/>
            <Link to="/manage"><FontAwesomeIcon icon={faEdit}/> <b style={{color:"white"}}>Manage Services</b></Link>
        </div>
    );
};

export default SideNavbar;