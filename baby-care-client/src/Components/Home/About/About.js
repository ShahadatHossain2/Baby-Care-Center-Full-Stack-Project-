import React from 'react';
import babyCareImg from '../../../Images/careBaby.jpg'
const About = () => {
    return (
        <div style={{ backgroundColor: 'skyblue', height: '400px' }} className="container rounded mt-5 pt-5">
            <div className="row">
                <div className="col-md-6">
                    <img style={{ width: '90%', borderRadius: '10px' }} src={babyCareImg} alt="" />
                </div>
                <div className="col-md-6 pt-3">
                    <h3 style={{ fontFamily:'fantasy'}}>Let Us Care Your Baby <br /> <span style={{ color: 'deeppink' }}>Like a Mother</span></h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae doloribus tempore aspernatur placeat nulla odio voluptas culpa nesciunt fugit eveniet quam obcaecati a atque deserunt blanditiis esse, aliquam perspiciatis maiores earum magni fuga corrupti sed illo excepturi. Culpa, accusamus dolorem?</p>
                    <div style={{ display: 'flex', justifyContent:'space-between', fontFamily:'fantasy' }}>
                        <div>
                            <h1 style={{ color: 'deeppink' }}>400+</h1>
                            <b>Happy Parents</b>
                        </div>
                        <div>
                            <h1 style={{ color: 'deeppink' }}>10+</h1>
                            <b>Total Services</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;