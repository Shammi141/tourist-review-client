import React from 'react';
import offer from '../../../assests/offer/offer1.jpeg';

const OfferCard = () => {
    return (
        <div className="mb-20 card m-8 p-6 w-100% bg-base-100 shadow-xl">
            <img className='max-h-96 p-20 rounded-md' src={offer} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title text-blue-600">
                Wanna Get Best Offer?
                <div className="badge badge-secondary ">New Offer</div>
                </h2>
                <p>Discover new place with your ones who is the best and nearest. <br />
                Hey! We are giving the best offer to you. Come to grab & explore the world.
                </p>
                <div className="card-actions justify-end">
                <div className="badge text-blue-600 badge-outline">General</div> 
                <div className="badge text-blue-600 badge-outline">Premium</div>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;