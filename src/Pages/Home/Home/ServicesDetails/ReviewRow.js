import React from 'react';

const ReviewRow = ({review, handelDelete}) => {
    const {reviewerName, email, image, message, _id} = review;
    
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handelDelete(_id)} className='btn'>X</button>
                    </label>
                </th>
                <td >
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    image !== null ?
                                    <>
                                        <div className="avatar">
                                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={image} alt="user img"/>
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
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{reviewerName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {message}
                <br/>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default ReviewRow;