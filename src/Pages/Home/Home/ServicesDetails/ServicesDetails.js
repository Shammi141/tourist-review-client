import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const services = useLoaderData();
    const {img, title, price, description} = services;
    return (
        <div>
            <h1 className="text-center font-bold my-10 text-4xl text-blue-700">Service Details & Reviews</h1>
            <div className="card card-compact w-86 bg-base-100 shadow-xl mb-20 mx-20">
                <img className='h-96 rounded-lg' src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-2xl text-blue-700">{title}</h2>
                    <p className='font-bold text-lg '>Price: ${price}</p>
                    <p>{description}</p>
                    <Link to ='' className="card-actions justify-end">
                    <button className="btn btn-primary">Add Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;