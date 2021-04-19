import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import UserSideNevBar from '../UserSideNevbar/UserSideNevBar';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const [loggedInUser,setLoggedInUser] = useContext(userContext);

    useEffect(()=>{
        fetch(`https://safe-earth-98425.herokuapp.com/service/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data[0]))
    },[serviceId])

    const handlePayment = paymentId => {
      console.log(paymentId);
      const status = 'Pending';
      const orderDetails = { ...loggedInUser, paymentId : paymentId, ...service,  orderTime: new Date(), status };
  
      fetch('https://safe-earth-98425.herokuapp.com/addBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            alert('Your order placed successfully');
          }
  
        });
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <UserSideNevBar></UserSideNevBar>
            </div>
            <div className="col-md-6 mt-5">
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:'20px'}}>
                    <h4><strong>Book</strong></h4>
                    <b>{loggedInUser.name}</b>
                </div>
                <div>
                    <div class="mb-3">
                        <input type="text" class="form-control" defaultValue={loggedInUser.name} name="name" placeholder="Your name" />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="email" defaultValue={loggedInUser.email} class="form-control" placeholder="Your email" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" defaultValue={service.title} name="title" placeholder="Service Title" />
                    </div>
                    <div>
                        <p>The price of the program : {service.price}</p>
                    </div>
                </div>
                <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
            </div>
        </div>
    );
};

export default Booking;