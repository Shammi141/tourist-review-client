import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {
    useTitle('Add Review');
    const {title, _id} = useLoaderData();
    //for getting user info
    const {user} = useContext(AuthContext); 
    
    const handelPlaceReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregisterd';
        const message = form.message.value;
        const time = new Date();
        const image = user.photoURL;
        console.log(user.photoURL)

        //creating object for sending data to the server
        const orderedReview = {
            serviceId : _id,
            reviewerName: name,
            email,
            image,
            message,
            title,
            time
        }

        fetch('https://tourist-review-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Thanks for Giving Your Review');
                form.reset();
            }
        })
        .catch(err => console.error(err));

    }
    return (
        <div>
            <h3 className="font-semibold my-6 text-2xl text-purple-700">You Are Adding Reviews for {title} service</h3>

            <form onSubmit={handelPlaceReview}>
                
                <div>
                    <label className="label">
                    <span className="label-text"> Your name</span>
                    </label>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs" required />
                </div>
                <div>
                    <label className="label">
                    <span className="label-text"> Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-primary w-full max-w-xs" readOnly />
                </div>
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your image</span>
                        </label>
                        {/* <input name='image' type="file" className="file-input file-input-bordered w-full max-w-xs" required /> */}
                        {
                            user?.photoURL !== null ?
                            <>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} alt="user img"/>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={`https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0=`} />
                                </div>
                            </div>
                            </>
                        }
                </div> 
                <br />
                <div>
                    <label className="label">
                    <span className="label-text">Write your review</span>
                    </label>
                    <textarea name='message' className="textarea textarea-primary w-full" placeholder="Review"></textarea>
                </div>
                <input type="submit" className='btn btn-primary mb-10' value="Submit Review" required />
            </form>
        </div>
    );
};

export default AddReview;