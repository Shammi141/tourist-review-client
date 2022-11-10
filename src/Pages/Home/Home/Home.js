import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import OfferCard from '../OfferCard/OfferCard';
import Ratings from '../Ratings/Ratings';
import HomeService from '../Services/HomeService';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Link to='/services'>
                <button className="btn btn-primary my-10 mx-auto">See All Services</button>
            </Link>
            <OfferCard></OfferCard>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;