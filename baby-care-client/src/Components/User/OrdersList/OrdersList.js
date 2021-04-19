import React from 'react';

const OrdersList = ({order}) => {
    const status = order.status;
    return (
        <div style={{borderRadius:'10px', boxShadow:'10px 10px 15px gray'}} className="w-50 p-3 col-md-5 ml-3 mb-3">
            <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                <img style={{width:'40px', borderRadius: '20px'}} src={order.image} alt=""/>
                <h6 style={status==='Pending'?{color:"red"} : {color:'green'}}>{status}</h6>
            </div>
            <div className='mt-2'>
                <h5>{order.title}</h5>
                <p>{order.description}</p>
            </div>
        </div>
    );
};

export default OrdersList;