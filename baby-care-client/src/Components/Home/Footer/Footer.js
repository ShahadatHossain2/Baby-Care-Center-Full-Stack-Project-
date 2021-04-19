import React from 'react';
import fbIcon from '../../../Images/fbIcon.jpg'
import instagram from '../../../Images/instaIcon.jpg'
import google from '../../../Images/google.jpg'

const Footer = () => {
    return (
        <footer className="container footer-area clear-both">
        <div className="row pt-5">
            <div className="col-md-4">
                <b>Address:</b>
                <p>Foy's Lake, Abdul Hamid Road</p>
                <p>Chittagong, Bangladesh</p>
            </div>
            <div className="col-md-4">
                <a href="https://www.facebook.com/"><img style={{width:'40px'}} src={fbIcon} alt=""/> Facebook</a> <br/>
                <a href="https://www.facebook.com/"><img style={{width:'40px'}} src={instagram} alt=""/> Instagram</a> <br/>
                <a href="https://www.facebook.com/"><img style={{width:'40px'}} src={google} alt=""/> Google</a>
            </div>
            <div className="col-md-4">
                <h6>Call now</h6>
                <button className="btn btn-primary">+8801834683710</button>
            </div>
        </div>
        <div className="copyRight text-center mt-5">
                <p>@Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
    </footer>
    );
};

export default Footer;