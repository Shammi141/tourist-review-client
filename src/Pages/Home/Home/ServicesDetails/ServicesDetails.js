import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';

const ServicesDetails = () => {
    useTitle('Details & Reviews');
    //for showing service details
    const services = useLoaderData();
    const {img, title, price, description, _id} = services;

    //for showing users reviews
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/servicesreviews/${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);

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
            <div className="overflow-x-auto w-full">
                    {
                        reviews.length >0 ?
                        <table className="table w-full">
                        <thead>
                            <tr className='flex space-x-24'>
                            <th>Name</th>
                            <th>Review</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            reviews &&
                            reviews.map(review =>{

                                return <tr>
                                    <td>
                                     {
                                        user && user?.photoURL !== null ?
                                            <>
                                                <div className="avatar">
                                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={user.photoURL} alt="user img"/>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                            <div className="avatar">
                                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={`https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0=`} alt="avatar" />
                                                </div>
                                            </div>
                                            </> 
                                     }

                                    </td>

                                        <td>{review.reviewerName}</td>
                                        <td>{review.message}</td>
                                    </tr>
                                })
                        }
                        </tbody>
                        </table>
                        :
                        <pc className="text-">No reviews here</pc>
                    }
            </div>
            
        </div>
    );
};

export default ServicesDetails;