import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Services/Service';
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <About></About>
            <ShowReviews></ShowReviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;