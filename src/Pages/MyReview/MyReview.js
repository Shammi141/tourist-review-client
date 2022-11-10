import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from '../Home/Home/ServicesDetails/ReviewRow';

const MyReview = () => {
    useTitle('Reviews');


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
        <div>
            <h2 className='text-xl'>You have {} reviews</h2>
            <div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                            <thead>
                        <tr className='flex space-x-24'>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Edit</th>
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

export default MyReview;