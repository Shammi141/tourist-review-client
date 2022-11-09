import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    //for showing service details
    const services = useLoaderData();
    const {img, title, price, description, _id} = services;
    return (
        <div>
            <h1 className="text-center font-bold my-10 text-4xl text-blue-700">Service Details & Reviews</h1>
            <h3 className="font-semibold mb-6 px-20 text-2xl text-purple-700">Details of the service</h3>
            <div className="card card-compact w-86 bg-base-100 shadow-xl mb-20 mx-20">
                <img className='h-96 rounded-lg' src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-2xl text-blue-700">{title}</h2>
                    <p className='font-bold text-lg '>Price: ${price}</p>
                    <p>{description}</p>
                    <Link to ={`/services/addreview/${_id}`} className="card-actions justify-end">
                    <button className="btn btn-primary">Add Your Review</button>
                    </Link>
                </div>
            </div>

            <h3 className="font-semibold mb-6 px-20 text-2xl text-purple-700">Reviews of the service</h3>

        </div>
    );
};

export default ServicesDetails;