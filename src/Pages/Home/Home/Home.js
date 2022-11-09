import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import OfferCard from '../OfferCard/OfferCard';
import Ratings from '../Ratings/Ratings';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OfferCard></OfferCard>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;