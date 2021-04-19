import React, { useContext, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SideNavbar from '../SideNavbar/SideNavbar';
import axios from 'axios';
import { userContext } from '../../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    

    const handleSubmit = () => {
        fetch('https://safe-earth-98425.herokuapp.com/addService',{
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(info)
        })

    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '21fc5f59361665cf68fba22cbd86f6d4');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            const newProduct = {...info};
            newProduct.image = response.data.data.display_url;
            console.log(newProduct)
            setInfo(newProduct);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <div className="row ">
            <div className="col-md-3">
                <SideNavbar></SideNavbar>
            </div>
            <div className="col-md-7 mt-5">
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:'20px'}}>
                    <h4><strong>Add Service</strong></h4>
                    <b>{loggedInUser.name}</b>
                </div>
                <div>
                    <div class="mb-3">
                        <label htmlFor="title" class="form-label">Service Title</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Enter Title"/>
                             </div>
                        <div class="mb-3">
                            <label htmlFor="description" class="form-label">Description</label>
                            <input onBlur={handleBlur} type="text"  name="description" class="form-control" placeholder="Enter Description" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="price" class="form-label">Price</label>
                            <input onBlur={handleBlur} type="text"  name="price" class="form-control" placeholder="Enter price" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="image" class="form-label">Upload Image</label>
                            <input onChange={handleImageUpload} type="file"  name="file" class="form-control"/>
                        </div>
                        <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
                </div>
                        </div>
                    </div>
        </div>
    );
};

export default Admin;