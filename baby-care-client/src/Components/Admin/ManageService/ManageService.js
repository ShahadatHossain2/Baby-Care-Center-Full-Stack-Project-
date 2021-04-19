import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import SideNavbar from '../SideNavbar/SideNavbar';
import deleteImg from '../../../Images/Group 33150.png'

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://safe-earth-98425.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (id)=> {
        console.log(id);
        fetch("https://safe-earth-98425.herokuapp.com/delete/"+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert("Deleted Successfully");
            }
        })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <SideNavbar></SideNavbar>
            </div>
            <div className="col-md-8 mt-5">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: '20px' }}>
                    <h4><strong>Manage Service</strong></h4>
                    <b>{loggedInUser.name}</b>
                </div>
                <table class="table shadow rounded mt-5">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <tr>
                            <td>{service.title}</td>
                            <td>{service.description}</td>
                            <td>{service.price}</td>
                            <td><button style={{border:'none'}} onClick={()=>handleDelete(service._id)} ><img style={{width:'25px', borderRadius:'5px'}} src={deleteImg} alt=""/></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageService;