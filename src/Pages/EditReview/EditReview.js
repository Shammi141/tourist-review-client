import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    // const [updateReview, setUpdateReview] =useState();
    
     const updateReview = useLoaderData()

    const editReview = event =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const newReview = updateReview;
        newReview['message'] = message;
        console.log(newReview)

        fetch(`http://localhost:5000/reviews/${updateReview._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));

    }
    return (
        <div>
            <h3 className='text-xl font-bold'>You are editing your review...</h3>
            <form onSubmit={editReview}>
                
                <div>
                    <label className="label">
                    <span className="label-text"> Your name</span>
                    </label>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs" required defaultValue={updateReview?.reviewerName} readOnly />
                </div> <br />
                <input name='email' type="email" placeholder="Your Email" defaultValue={updateReview?.email} className="input input-bordered input-primary w-full max-w-xs" readOnly />
                <br />
                <div>
                    <label className="label">
                    <span className="label-text">Edit your review here</span>
                    </label>
                    <textarea name='message' className="textarea textarea-primary w-full" placeholder="Review" defaultValue={updateReview?.message}></textarea>
                </div>
                <input type="submit" className='btn btn-primary mb-10' value="Submit Edited Review" required />
            </form>
        </div>
    );
};

export default EditReview;