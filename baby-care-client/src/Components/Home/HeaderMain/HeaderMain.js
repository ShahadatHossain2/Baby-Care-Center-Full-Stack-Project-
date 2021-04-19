import React from 'react';
import BabyImg from '../../../Images/cover-image.jpg'
const HeaderMain = () => {
    return (
        <div className="container">
            <main className="row de-flex align-items-center">
            <div className="col-md-6">
                <h1 className="text-white">Baby Care <br/> & Kindergarten School</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button style={{color:"white", backgroundImage: "linear-gradient(45deg, tomato, blue)", border:"none", borderRadius:"10px", width:"150px"}}>Learn More</button>
            </div>
            <div className="col-md-6">
                <img src={BabyImg} alt="" style={{width:'350px', marginLeft:'160px', borderRadius:'10px'}}/>
            </div>
        </main>
        </div>
    );
};

export default HeaderMain;