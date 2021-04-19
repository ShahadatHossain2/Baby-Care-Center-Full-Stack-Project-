import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import icon from '../../../Images/icon.jpg';

const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(() => {
        fetch("https://safe-earth-98425.herokuapp.com/checkAdmin?email=" + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setIsAdmin(true);
                }
            })
    }, [loggedInUser.email])
    return (
        <nav className="container navbar navbar-expand-lg navbar-light">

            <img style={{ width: '50px', borderRadius: '25px' }} src={icon} alt="" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/home"><b className="nav-link mr-3">Home</b></Link>
                    </li>
                    {
                        isAdmin && <li className="nav-item">
                            <Link to="/admin"><b className="nav-link mr-3">Admin</b></Link>
                        </li>
                    }
                    <li className="nav-item">
                            <Link to="/orders"><b className="nav-link mr-3">Orders</b></Link>
                        </li>
                    <li className="nav-item">
                        <Link to='/'><b className="nav-link mr-3">Reviews</b></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-danger" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;