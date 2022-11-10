import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('AddServices');
    return (
        <div>
            <h2>add service</h2>
             {/* <div className="card card-compact w-86 bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src= {img}>
                    <figure><img className='h-52' src={img} alt="Shoes"/></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title text-2xl text-blue-700">{title}</h2>
                <p className='font-bold text-lg '>Price: ${price}</p>
                <p>
                    {

                        description.length > 100 ? 
                        <p>{description.slice(0, 100) + '...'}</p>
                        :
                        <p>{description}</p>
                    }
                </p>
                <Link to ={`/services/${_id}`} className="card-actions justify-end">
                <button className="btn btn-primary">See Details</button>
                </Link>
            </div>
            </div> */}
        </div>
    );
};

export default AddService;