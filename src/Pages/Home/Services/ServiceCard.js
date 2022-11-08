import React from 'react';

const ServiceCard = ({service}) => {
    const  {img, title, price, description} =service;
    return (
        <div className="card card-compact w-86 bg-base-100 shadow-xl">
            <figure><img className='h-52' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-blue-700">{title}</h2>
                <p className='font-bold text-lg '>Price: ${price}</p>
                <p>
                    {
                    description.length > 100 ? 
                    <p>{description.slice(0,100) + '...'}</p>
                    :
                    <p>{description}</p>
                    }
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;