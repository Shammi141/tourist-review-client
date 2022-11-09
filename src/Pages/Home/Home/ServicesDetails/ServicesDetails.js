import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const ServicesDetails = () => {
    useTitle('Details & Reviews');
    //for showing service details
    const services = useLoaderData();
    const {img, title, price, description, _id} = services;

    //for showing users reviews
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email]);

    //for deletion
    const handelDelete = id =>{
        const proceed = window.confirm('Are you sure that you want to delete the review?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining);
                }
            })
            .catch(err => console.error(err))
        }
    }


    return (
        <div className='mb-10'>
{/* service details section */}
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

{/*All review section */}
            <h3 className="font-semibold mb-6 px-20 text-2xl text-purple-700">Reviews of the service</h3>
            <div>
                
                <h2 className='text-xl'>This service has {reviews.length} reviews</h2>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                            <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            reviews &&
                            reviews.map(review => <ReviewRow
                            key={review._id}
                            review = {review}
                            handelDelete = {handelDelete}
                            ></ReviewRow>

                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;