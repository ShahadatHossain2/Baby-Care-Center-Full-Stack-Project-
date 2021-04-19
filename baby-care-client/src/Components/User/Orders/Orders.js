import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import OrdersList from '../OrdersList/OrdersList';
import UserSideNevBar from '../UserSideNevbar/UserSideNevBar';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(()=>{
        fetch('https://safe-earth-98425.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[loggedInUser.email])

    console.log(orders)
    return (
        <div className="row">
            <div className="col-md-3">
                <UserSideNevBar></UserSideNevBar>
            </div>
            <div className="col-md-8 mt-5">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h4><strong>Service List</strong></h4>
                    <b>{loggedInUser.name}</b>
                </div>
                <div className="row">
                {
                    orders.map(order => <OrdersList key={order._id} order={order}></OrdersList>)
                }
                </div>
            </div>
        </div>
    );
};

export default Orders;