import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://safe-earth-98425.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);
    return (
        <div className="container text-center mt-5">
            <h1 style={{fontFamily:"fantasy", color:"skyblue"}}>Our awesome Programmes</h1>
            <div className="row">
                {
                    services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Service;