import React, { useEffect, useState } from 'react';
import SideNavbar from '../SideNavbar/SideNavbar';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://safe-earth-98425.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const [status, setStatus] = useState('')
    const handleChange = id => {
        const newStatus = document.getElementById('status').value;
        console.log(newStatus, id);
        fetch(`https://safe-earth-98425.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify(newStatus)
        })
        .then(res=> res.json)
        .then(result => {
            console.log(result)
            if(result) {
                
                alert('Status updated Successfully');
            }
         })
        
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <SideNavbar></SideNavbar>
            </div>
            <div className="col-md-6 mt-5">
                <table class="table shadow rounded mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.title}</td>
                                <td><select onChange={()=>handleChange(order._id)} name="status" id="status">
                                    <option value={order.status}>{order.status}</option>
                                    <option style={{color:'red'}} value="Pending">Pending</option>
                                    <option style={{color:'goldenrod'}} value="Ongoing">Ongoing</option>
                                    <option style={{color:'green'}} value="Done">Done</option>
                                </select></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;