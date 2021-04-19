import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import SideNavbar from '../SideNavbar/SideNavbar';

const MakeAdmin = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const [newAdmin, setNewAdmin] = useState([])

    const handleBlur = e => {
        const admin = {...newAdmin};
        admin[e.target.name] = e.target.value;
        setNewAdmin(admin);
    }

    const handleAddAdmin = () => {
        fetch('https://safe-earth-98425.herokuapp.com/addAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAdmin)
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            alert('New Admin Added successfully');
          }
  
        });
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <SideNavbar></SideNavbar>
            </div>
            <div className="col-md-6 mt-5">
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:'20px'}}>
                    <h4><strong>Add Admin</strong></h4>
                    <b>{loggedInUser.name}</b>
                </div>
                <div className="mt-5">
                 <input type="text" onBlur={handleBlur} name="email" id="" className="w-75" placeholder="Enter Email Address"/> <button onClick={handleAddAdmin} className="btn btn-danger">Add</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;