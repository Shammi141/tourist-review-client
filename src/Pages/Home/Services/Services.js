import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services');
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('https://tourist-review-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div>
            <p className="text-center text-4xl font-bold text-blue-600 my-10">Our Services</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCard
                    key = {service._id}
                    service = {service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;