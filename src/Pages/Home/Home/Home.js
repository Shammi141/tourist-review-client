import React from 'react';
import Banner from '../Banner/Banner';
import OfferCard from '../OfferCard/OfferCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* services hobe ekhane */}
            <OfferCard></OfferCard>
        </div>
    );
};

export default Home;